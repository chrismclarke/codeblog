#!/bin/sh
#!/bin/bash

typeset -i tests=0

function it {
    let tests+=1;
    description="$1";
}

function assert {
    if [[ "$1" == "$2" ]]; then
        printf "\033[32m.\033[0m";
    else
        printf "\033[31m\nFAIL: $description\033[0m: '$1' != '$2'\n";
        exit 1
    fi
}

it "Should accept a file"
    code=0
    ./cli.js Readme.md > /dev/null 2>&1 || code=$?
    assert $code 0

it "Should accept stdin"
    code=0
    cat History.md | ./cli.js > /dev/null 2>&1 || code=$?
    assert $code 0

it "Should fail without input"
    code=0
    ./cli.js > /dev/null 2>&1 || code=$?
    assert $code 1

it "Should fail on an invalid file"
    code=0
    ./cli.js some-other-file.md > /dev/null 2>&1 || code=$?
    assert $code 1

it "Should fail on multiple files"
    code=0
    ./cli.js History.md Readme.md > /dev/null 2>&1 || code=$?
    assert $code 1

it "Should fail on stdin and files"
    code=0
    cat History.md | ./cli.js Readme.md > /dev/null 2>&1 || code=$?
    assert $code 1

it "Should accept \`--help\`"
    code=0
    ./cli.js --help > /dev/null 2>&1 || code=$?
    assert $code 0

it "Should accept \`-h\`"
    code=0
    ./cli.js -h > /dev/null 2>&1 || code=$?
    assert $code 0

it "Should accept \`--version\`"
    code=0
    ./cli.js --version > /dev/null 2>&1 || code=$?
    assert $code 0

it "Should accept \`-v\`"
    code=0
    ./cli.js -v > /dev/null 2>&1 || code=$?
    assert $code 0

printf "\033[32m\n(✓) Passed $tests assertions without errors\033[0m\n";

exit 0
