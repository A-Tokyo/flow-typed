declare module "thesaurus" {
  declare class thesaurusClass {
    find(string): Array<string>;
    load(string): this;
    get(): { [string]: Array<string> };
    toJson(): string;
  }

  declare var exports: thesaurusClass;
}
