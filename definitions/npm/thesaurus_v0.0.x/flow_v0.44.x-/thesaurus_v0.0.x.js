declare module "thesaurus" {
  declare class thesaurusClass {
    find(string): Array<string>;
    load(string): this;
    get(): { [string]: Array<string> };
    toJson(): string; // Stringifies the database JSON object
  }

  declare var exports: thesaurusClass;
}
