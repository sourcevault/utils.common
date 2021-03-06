SRC_NAME = $(shell ls src)

TEST_NAME = $(shell ls test | grep ".ls")

SRC_FILES = ${SRC_NAME:%=--watch src/%}

TEST_FILES = ${TEST_NAME:%=--watch test/%}

MAKEFLAGS += --no-print-directory

file = test/test.js

pkg:
	yaml2json src/package.yaml > package.json

compile:
	make pkg
	lsc -b -co dist src
	lsc -b -c test
	node ${file}

w.compile:
	make pkg
	nodemon  --exec "make compile || exit 1" ${SRC_FILES} ${TEST_FILES}


.ONESHELL:
SHELL = /bin/bash
.SHELLFLAGS = -ec

travis:
	@for i in test/*.js
	do
		node $$i
	done

testy:
	lsc -b -co dist src
	lsc -b -c test/*.ls
	make pkg
	make travis

w.testy:
	nodemon --exec "make testy" ${TEST_FILES} ${SRC_FILES}

