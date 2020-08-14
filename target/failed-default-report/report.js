$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login",
  "description": "  As user, I want to be able to login with username and password",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.background({
  "name": "open login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "java.lang.NullPointerException\n\tat com.vytrack.step_definitions.Hooks.setup(Hooks.java:18)\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Login as sales manager and verify that title is Dashboard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@sales_manager"
    }
  ]
});
formatter.step({
  "name": "user logs in as a sales manager",
  "keyword": "When "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_logs_in_as_a_sales_manager()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should verify that title is a Dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "com.vytrack.step_definitions.LoginStepDefinitions.user_should_verify_that_title_is_a_Dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\n\tat com.vytrack.step_definitions.Hooks.tearDown(Hooks.java:36)\n",
  "status": "failed"
});
});