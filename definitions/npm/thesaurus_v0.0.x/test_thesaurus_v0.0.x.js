/* @flow */
import thesaurus from "thesaurus";

const tokyoSynms: Array<string> = thesaurus.find("tokyo");
// $ExpectError
thesaurus.find();

const thesaurusData: { [index: string]: Array<string> } = thesaurus.get();
// $ExpectError
thesaurus.get("x");

const thesaurusDataStr: string = thesaurus.toJson();
// $ExpectError
thesaurus.toJson("x");

thesaurus.load("dummyDatFilePath");
// $ExpectError
thesaurus.load();
