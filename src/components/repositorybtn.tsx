import { CgWebsite } from "react-icons/cg";
import { RiGitRepositoryFill } from "react-icons/ri";

type BtnProps = {
  link: string;
  repo: boolean;
};

export default function RepoBtn({ link, repo }: BtnProps) {
  return (
    <a href={link} className={repo ? "btn primary-btn" : "btn secondary-btn"} target="_blank" rel="noopener noreferrer">
      {repo ? (<><RiGitRepositoryFill />Repository</>) : (<><CgWebsite/>Site</>)}</a>
  );
}
