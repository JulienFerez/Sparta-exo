import fetch, { Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export type GitHub = {
  message: string;
  repos_url: string;
};

export const getReposUrl = async (nickname: string): Promise<string> => {
  const response = await fetch(`https://api.github.com/users/${nickname}`);
  const result = await response.json();

  if (result.message === "Not Found") {
    throw new Error("user doesn't exist");
  }
  return result.repos_url;
};

export const getRepos = async (url: string): Promise<Repo[]> => {
  const response = await fetch(`${url}`);
  const result = await response.json();
  return result;
};

export const printRepos = (arrayRepo: Repo[]): Repo[] => {
  for (let i = 0; i < arrayRepo.length; i++) {
    console.log(`${i + 1} - ${arrayRepo[i].name}`);
  }
  return arrayRepo;
};

export const printRepository = (repo: string): void => {
  console.log();
};

export const getProjectInformations = async (url: string): Promise<string[]> => {
  const response = await fetch(`${url}`);
  const result = await response.json();
  return result;
};
