export interface ProjectConfig {
  name: string;
  projectPath: string;
  template: string;
  templatePath: string;

  [k: string]: string;
}
