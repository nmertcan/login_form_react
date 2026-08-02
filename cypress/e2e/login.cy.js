describe("Login Formu", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Başarılı giriş yapıldığında success sayfasına gider", () => {
    cy.get('[data-cy="email-input"]').type("test@test.com");
    cy.get('[data-cy="password-input"]').type("Abc1234!");
    cy.get('[data-cy="accepted-checkbox"]').check();

    cy.get('[data-cy="login-button"]')
      .should("not.be.disabled")
      .click();

    cy.url().should("include", "/success");
    cy.contains("Login Successful").should("be.visible");
  });

  it("Email yanlışsa hata mesajı görünür ve buton disabled olur", () => {
    cy.get('[data-cy="email-input"]').type("yanlisEmail");
    cy.get('[data-cy="password-input"]').type("Abc1234!");
    cy.get('[data-cy="accepted-checkbox"]').check();

    cy.contains("Geçerli bir email adresi giriniz").should("be.visible");
    cy.get('[data-cy="login-button"]').should("be.disabled");
  });

  it("Email ve password yanlışsa iki hata mesajı görünür", () => {
    cy.get('[data-cy="email-input"]').type("yanlisEmail");
    cy.get('[data-cy="password-input"]').type("123");
    cy.get('[data-cy="accepted-checkbox"]').check();

    cy.contains("Geçerli bir email adresi giriniz").should("be.visible");
    cy.contains(
      "En az 8 karakter, 1 büyük harf, 1 küçük harf, 1 sembol ve 1 rakam içeren bir şifre giriniz"
    ).should("be.visible");

    cy.get('[data-cy="login-button"]').should("be.disabled");
  });

  it("Email ve password doğru ama şartlar kabul edilmezse buton disabled kalır", () => {
    cy.get('[data-cy="email-input"]').type("test@test.com");
    cy.get('[data-cy="password-input"]').type("Abc1234!");

    cy.get('[data-cy="login-button"]').should("be.disabled");
  });
});