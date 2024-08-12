// import { render, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import { App } from "../App";
// import { describe, expect, test } from "vitest";

// describe("App Component", () => {
//   test("renderiza correctamente y muestra el tema", () => {
//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );

//     const themeText = screen.getByText(/Theme Light/i);
//     expect(themeText).toBeInTheDocument();
//   });

//   test("navegación a la página de About", () => {
//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );

//     const aboutLink = screen.getByRole("link", { name: /about/i });
//     aboutLink.click();

//     const aboutHeading = screen.getByRole("heading", { name: /about/i });
//     expect(aboutHeading).toBeInTheDocument();
//   });

//   test("navegación a la página de Contact", () => {
//     render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );

//     const contactLink = screen.getByRole("link", { name: /contact/i });
//     contactLink.click();

//     const contactHeading = screen.getByRole("heading", { name: /contact/i });
//     expect(contactHeading).toBeInTheDocument();
//   });

//   test("cambia el tema al hacer click en el switch", () => {
//     const { getByRole } = render(
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     );

//     const switchButton = getByRole("checkbox");
//     switchButton.click();

//     expect(switchButton).toBeChecked();
//   });
// });

