// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add(
  "drag",
  {
    prevSubject: "element",
  },
  (sourceSelector, targetSelector) => {
    cy.wrap(sourceSelector)
      .then((subject) => {
        const initialRect = subject.get(0).getBoundingClientRect();
        return [subject, initialRect];
      })
      .then(([subject, initialRect]) => {
        cy.wrap(subject)
          .trigger("pointerdown", { force: true })
          .then(() => {
            cy.get(targetSelector)
              .then((targetSubject) => {
                const targetRect = targetSubject.get(0).getBoundingClientRect();
                return [targetSubject, targetRect];
              })
              .then(([targetSubject, targetRect]) => {
                cy.wrap(targetSubject).trigger("pointermove", {
                  force: true,
                  clientX: Math.floor(targetRect.left + targetRect.width),
                  clientY: Math.floor(targetRect.top + targetRect.height),
                });
              });
          });
      })
      .trigger("pointerup", { force: true });
  }
);
