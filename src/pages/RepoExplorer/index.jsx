import Card from "../../components/Card";
import SearchBox from "../../components/SearchBox";
import { getGithubRepository as getGithubRepositoryApi } from "../../services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import styles from "./index.module.css";
import { Search, X } from "react-feather";

const RepoExplorer = () => {
  const navigate = useNavigate();
  const [repositories, setRepositories] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const [search, setSearch] = useState("");

  const handleCardClick = (event) => {
    const parent = event.target.closest("[id*='card_']");
    if (parent) {
      const [, repositoryId, repositoryIndex] = parent.id.split("_");
      navigate(`/repository/details/${repositoryId}`, {
        state: repositories[repositoryIndex],
      });
    }
  };

  const getOrganizationRepositories = async () => {
    try {
      const { data: response } = await getGithubRepositoryApi("godaddy", "");
      setRepositories(response);
    } catch (error) {
      setErrorMessage(error?.response?.data?.message ?? "Something went wrong");
    }
  };

  const handleOnSearch = (value) => {
    setSearch(value);
    if (value) {
      const filteredRepositories = repositories.filter((repo) =>
        repo.name?.toLowerCase().includes(value?.toLowerCase())
      );
      setRepositories(filteredRepositories);
    } else {
      getOrganizationRepositories();
    }
  };

  const optimizedSearch = _.debounce(handleOnSearch, 500);

  const handleSearchClear = () => {
    setSearch("");
    getOrganizationRepositories();
  };

  useEffect(() => {
    getOrganizationRepositories();
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.heading}>Github Repository</h1>
        <span className={styles.subHeading}>
          Explore the github repository of godaddy
        </span>
      </div>

      <div style={{ marginTop: 24, marginBottom: 24, display: "flex" }}>
        <SearchBox
          type="text"
          defaultValue={search}
          onChange={optimizedSearch}
          onClear={handleSearchClear}
          placeholder="Search by name"
          starticon={<Search width={20} height={20} color="#0f0f0f66" />}
          endicon={
            <X
              width={20}
              height={20}
              color="#0f0f0f66"
              style={{ cursor: "pointer" }}
            />
          }
        />
      </div>

      <div style={{ marginTop: 24 }}>
        {errorMessage ? (
          <>
            <h4>There is some error while fetching repository data</h4>
            <p>{`Error: ${errorMessage}`}</p>
          </>
        ) : (
          <div className={styles.cardContainer} onClick={handleCardClick}>
            {repositories?.map((respository, repositoryIndex) => (
              <Card
                key={respository.id}
                id={`card_${respository.id}_${repositoryIndex}`}
                imageUrl={respository?.owner?.avatar_url}
                title={respository?.name}
                description={respository?.description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoExplorer;
