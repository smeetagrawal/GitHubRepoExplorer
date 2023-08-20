import { useLocation, useNavigate } from "react-router-dom";
import styles from "./index.module.css";
import { ArrowLeft, Copy, Check } from "react-feather";
import { useState } from "react";

const RepoDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const repositoryDetails = location.state;
  const [linkCopied, setLinkCopied] = useState(false);

  const handleCopyRepositoryLink = () => {
    navigator.clipboard.writeText(repositoryDetails?.html_url);
    setLinkCopied(true);
    setTimeout(() => {
      setLinkCopied(false);
    }, 3000);
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <>
      <div className={styles.headerBtn} onClick={handleBackButton}>
        <ArrowLeft width={20} height={20} color="#0f0f0f66" />
      </div>

      <div className={styles.container}>
        <h3 className={styles.heading}>Repository details</h3>
        <div className={styles.repositoryDetails}>
          <img
            src={repositoryDetails?.owner?.avatar_url}
            className={styles.repositoryImage}
            alt="repository icon"
          />
          <div className={styles.respositoryInformation}>
            <p className={styles.repositoryName}>{repositoryDetails?.name}</p>
            <p className={styles.respositoryDescription}>
              {repositoryDetails?.description}
            </p>
            <p className={styles.languagesUsed}>
              Languages used: {repositoryDetails?.language ?? "Not Available"}
            </p>
          </div>
          <div className={styles.repoLink}>
            <p style={{ whiteSpace: "nowrap" }}>Repo Link</p>
            <div
              onClick={handleCopyRepositoryLink}
              className={styles.headerBtn}
            >
              {linkCopied ? (
                <Check width={20} height={20} color="#0f0f0f66" />
              ) : (
                <Copy width={20} height={20} color="#0f0f0f66" />
              )}
            </div>
          </div>
        </div>
        <div className={styles.additionalDetailsInfo}>
          <div className={styles.card}>
            <div>
              <p>Forks</p>
              <p>{repositoryDetails?.forks_count}</p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <p>Open issues</p>
              <p>{repositoryDetails?.open_issues}</p>
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <p>Watchers</p>
              <p>{repositoryDetails?.watchers}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RepoDetails;
