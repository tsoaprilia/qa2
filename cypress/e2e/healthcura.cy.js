describe('Login Feature', () => {
  // it('User success Login', () => {
  //   // Membuka website
  //   cy.visit('https://katalon-demo-cura.herokuapp.com');
  //   cy.wait(1000); // Tunggu 1 detik untuk memastikan halaman selesai dimuat

  //   // Klik tombol "Make Appointment"
  //   cy.get('#btn-make-appointment').click();

  //   // Input username dan password yang benar
  //   cy.get('#txt-username').type('John Doe');
  //   cy.wait(1000); // Tunggu 1 detik
  //   cy.get('#txt-password').type('ThisIsNotAPassword');
  //   cy.wait(1000); // Tunggu 1 detik

  //   // Klik tombol "Login"
  //   cy.get("button[type='submit']").click();
  // });

  it('User failed Login', () => {
    // Membuka website
    cy.visit('https://katalon-demo-cura.herokuapp.com');
    cy.wait(1000); // Tunggu 1 detik untuk memastikan halaman selesai dimuat

    // Klik tombol "Make Appointment"
    cy.get('#btn-make-appointment').click();

    // Input username yang benar tetapi password salah
    cy.get('#txt-username').type('John Doe');
    cy.wait(1000); // Tunggu 1 detik
    cy.get('#txt-password').type('ThisIsAPassword');
    cy.wait(1000); // Tunggu 1 detik

    // Klik tombol "Login"
    cy.get("button[type='submit']").click();
  });

  it('User Make Appointment and History Check', () => {
    // Membuka website
    cy.visit('https://katalon-demo-cura.herokuapp.com');
    cy.wait(1000); // Tunggu 1 detik untuk memastikan halaman selesai dimuat

    // Klik tombol "Make Appointment"
    cy.get('#btn-make-appointment').click();

    // Input username dan password
    cy.get('#txt-username').type('John Doe');
    cy.wait(1000); // Tunggu 1 detik
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.wait(1000); // Tunggu 1 detik

    // Klik tombol "Login"
    cy.get("button[type='submit']").click();

    // Verifikasi bahwa halaman "Make Appointment" berhasil terbuka
    cy.get('h2').should('contain', 'Make Appointment');

    // Memilih fasilitas "Tokyo CURA Healthcare Center" di dropdown
    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');

    // Centang checkbox "Hospital Readmission"
    cy.get('#chk_hospotal_readmission').check();

    // Pilih opsi "Medicaid" di radio button program kesehatan
    cy.get('#radio_program_medicaid').check();

    // Isi tanggal kunjungan di field "Visit Date"
    cy.get('#txt_visit_date').clear().type('30/12/2024').blur();
    cy.wait(500); // Tunggu 0.5 detik

    // Isi komentar di field "Comment"
    cy.get('#txt_comment').type('Test Appointment Comment.', { force: true });

    // Klik tombol "Book Appointment" untuk mengkonfirmasi janji
    cy.get('#btn-book-appointment').click();

    // Verifikasi bahwa halaman "Appointment Confirmation" berhasil terbuka
    cy.get('h2').should('contain', 'Appointment Confirmation');

    // Klik menu toggle untuk membuka sidebar
    cy.get('#menu-toggle').click();
    cy.wait(500); // Tunggu 0.5 detik

    // Klik link "History" untuk membuka halaman riwayat janji
    cy.get('a[href="history.php#history"]').click();

    // Verifikasi bahwa URL mengarah ke halaman riwayat
    cy.url().should('include', 'history.php#history');

    // Verifikasi bahwa halaman "History" berhasil terbuka
    cy.get('h2').should('contain', 'History');
  });
});

// Catatan untuk atribut:
// id: #login → Mengacu pada elemen dengan ID "login"
// class: .login-button → Mengacu pada elemen dengan kelas "login-button"
// tag html: li a button → Mengacu pada elemen HTML seperti `li`, `a`, atau `button`
// atribut dalam tag: a[type="button"], button[name="buttonLogin"] → Mengacu pada elemen spesifik dengan atribut tertentu seperti `type="button"` atau `name="buttonLogin"`
