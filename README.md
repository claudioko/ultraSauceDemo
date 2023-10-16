# e2e-technical-interview

> Technical Interview take-home test for E2E SDET candidates.

## Table of Contents

- [Getting Started](#getting-started)
  - [Step-by-step guide to set up the project](#step-by-step-guide-to-set-up-the-project)
  - [Running the tests](#running-the-tests)
- [Interview Assignment](#interview-assignment)
- [Submitting the Assignment](#submitting-the-assignment)
- [Resource Links](#resource-links)

## Getting Started

In order to simplify the process we've created this repository to get you up and running as quickly as possible. You'll be using this repository to create a new github repo on your own account. You can clone that repo, work on the assignment at your leisure, push updates, etc. When you think you've completed the assignment, you can add the interviewer as a collaborator on your repository (more instructions on that [below](#submitting-the-assignment)).

### Step-by-step guide to set up the project

- Click the "Fork" button above.

  ![image](https://user-images.githubusercontent.com/1666298/229853476-3532d460-0b74-49a4-99c9-522095d9e042.png)

- On the `Create a new fork` screen, select an Owner and enter a repository name of your choosing or keep the default. Then click the `Create fork` button.

  ![image](https://user-images.githubusercontent.com/1666298/229852815-9fd2a36b-0147-465d-9340-d18671578f25.png)

### Running the tests

Now that you've forked the project, you'll want to clone the repo to your local machine and try running the tests!

- [Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your computer and run the following:
    ```sh
    npm ci
    npm run cypress
    ```
- If everything runs successfully, you're in business! You can jump ahead to the [assignment](#interview-assignment) to see what tests you can start adding!

## Interview Assignment

As an experienced SDET, we look forward to seeing your test architecture and implementation. We intentionally kept the test cases simple so you can spend most of your time on data management, code proficiency, and test optimization. We are using the sauce demo for the coding assignment. Please complete the following two tests:

> **Notes**
> - All the user login credentials are found directly below the login form at saucedemo.com.
> - Make sure to not hardcode credentials in code.

1. Following the sauce demo site requirements, create a test to validate the E2E flow of the standard user defined as below:
     - Visit saucedemo.com and confirm the user lands on the login screen.
     - Login using `standard_user` and confirm the user lands on the product list screen.
     - Filter by **Price (low to high)** and click **Add to cart** for the *first* item; confirm that the **Remove** button appears, and the number `1` appears on the cart icon.
     - Click on the title of the *second* item and confirm the user lands on the product detail screen.
     - Click **Add to cart** button and confirm the **Remove** button, and the number `2` appears on the **Cart icon**.
     - Click on the **Cart icon** and confirm the 2 items on the **Your cart** screen are correct
     - Click on the **Checkout** button and should land on the "Checkout: Your information" screen.
     - Enter all the fields on the "Checkout: Your information" screen, click the **Continue** button, and confirm landed on the "Checkout: review" screen.
     - Confirm the two items and the total price match, then click the **Finish** button.
     - Should land on "Checkout: Complete!" screen and click the **Back Home** button.
     - Should land on the product list screen, click on the hamburger and click **Logout**.

2. Following the sauce demo site requirements, create a test to validate the E2E flow of the problem user defined as below:
     - Visit saucedemo.com and confirm the user lands on the login screen.
     - Login using `problem_user` and confirm the user lands on the product list page.
     - Filter by "Price (low to high)" and confirm the filter text did not change, and it is "Name (A to Z)."
     - Click **Add to cart** button for **every item** on the product list; confirm the **Remove** button **only appears for three items** and the number `3` appears on the cart icon.
     - Click on the **Cart icon** and confirm the 3 items on the **Your cart** screen are correct.
     - Click on the **Checkout** button and should land on the "Checkout: Your information" screen.
     - The user can't enter all the fields on the "Checkout: Your information" screen and Should display an error message.
     - Click on the hamburger and click on **Reset App State**, then click **Logout**.

3. You'll find a file in the root of the project named [`QUESTIONS.md`](./QUESTIONS.md). Please update that file to answer the following questions:
     - If you made any assumptions, what are they?
     - If given more time, what are some other high priority user flows you would test?

## Submitting the assignment

After you complete the assignment and you need to add collaborators to review your code. Here is how to add contributors to your new repository:

- Go to the "Settings" tab on your repository page and click on **Collaborators** in the left side settings navigation.
  ![Settings and callaborators button](./assets/docs/SettingsAndCollaborators.png)

- Click on the **Add people** button on the manage access section.
  ![Add People button](./assets/docs/addPeople.png)

- Add a collaborator modal should appear and enter `engineering-interviews@leaflink.com` to find the collaborator, then click on the **Select a collaborator above** button.
  ![find a collaborator and add to the repository](./assets/docs/SelectCollaborator.png)

## Resource Links
-  [Cypress best practices](https://docs.cypress.io/guides/references/best-practices)
-  [Assertions](https://docs.cypress.io/guides/references/assertions)
-  [Custom Commands](https://docs.cypress.io/guides/tooling/typescript-support#Types-for-Custom-Commands)
-  [Configuration](https://docs.cypress.io/guides/references/configuration)
