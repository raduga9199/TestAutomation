$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SmokeTest.feature");
formatter.feature({
  "name": "Smoke test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Go to \u003cmodule\u003e and verify title: \u003ctitle\u003e",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user logs in as \"\u003cuser_type\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user navigates to \"\u003ctab\u003e\" and \"\u003cmodule\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies that page title is \"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user_type",
        "tab",
        "module",
        "title"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Fleet",
        "Vehicles",
        "All - Car - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Fleet",
        "Vehicles Model",
        "All - Vehicles Model - Entities - System - Car - Entities - System"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Customers",
        "Accounts",
        "All - Accounts - Customers"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Customers",
        "Contacts",
        "All - Contacts - Customers"
      ]
    },
    {
      "cells": [
        "sales manager",
        "Activities",
        "Calendar Events",
        "All - Calendar Events - Activities"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Go to Vehicles and verify title: All - Car - Entities - System - Car - Entities - System",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as \"sales manager\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_logs_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_navigates_to_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that page title is \"All - Car - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_verifies_that_page_title_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to Vehicles Model and verify title: All - Vehicles Model - Entities - System - Car - Entities - System",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as \"sales manager\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_logs_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Fleet\" and \"Vehicles Model\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_navigates_to_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that page title is \"All - Vehicles Model - Entities - System - Car - Entities - System\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_verifies_that_page_title_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to Accounts and verify title: All - Accounts - Customers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as \"sales manager\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_logs_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Customers\" and \"Accounts\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_navigates_to_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that page title is \"All - Accounts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_verifies_that_page_title_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to Contacts and verify title: All - Contacts - Customers",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as \"sales manager\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_logs_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Customers\" and \"Contacts\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_navigates_to_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that page title is \"All - Contacts - Customers\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_verifies_that_page_title_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Go to Calendar Events and verify title: All - Calendar Events - Activities",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user logs in as \"sales manager\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_logs_in_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"Activities\" and \"Calendar Events\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_navigates_to_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies that page title is \"All - Calendar Events - Activities\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_verifies_that_page_title_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});