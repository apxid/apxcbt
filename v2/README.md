# CBT Integrated GForm v3.1

## 1. Template Spreadsheet
1. Upload `template.xls` ke Google Drive.
2. Buka file tersebut dengan Google Sheets / Google Spreadsheet.
3. Setelah menjadi Google Spreadsheet, buka URL-nya.
4. Salin ID di antara `/d/` dan `/edit`.

## 2. Pasang backend GAS
1. Extensions → Apps Script pada spreadsheet tersebut, atau buat project Apps Script yang dapat mengakses spreadsheet.
2. Hapus kode lama lalu tempel seluruh isi `Code.gs`.
3. Pada bagian paling atas `Code.gs`, isi:
   `SPREADSHEET_ID: 'ID_SPREADSHEET_ANDA'`
4. Save.
5. Jalankan fungsi `health` melalui deployment Web App setelah deploy.

## 3. Deploy Web App
- Deploy → New deployment → Web app
- Execute as: Me
- Who has access: Anyone
- Salin URL `/exec`.

## 4. Frontend GitHub Pages
Isi `config.js`:
```js
window.CBT_CONFIG = {
  GAS_WEB_APP_URL: 'URL_WEB_APP_GAS_ANDA',
  LOGO_URL: '',
  APP_NAME: 'CBT Integrated GForm',
  APP_VERSION: '3.1',
  BUILD: '03 Oktober 2026',
  DEVELOPER: 'MB'
};
```
Upload `index.html`, `admin.html`, `proktor.html`, `config.js`, dan `app.js` ke repository GitHub Pages.

## Akun dummy
- Admin: `admin` / `admin123`
- Proktor Lab 1: `proktor01` / `123456`
- Proktor Lab 2: `proktor02` / `123456`
- Proktor Lab 3: `proktor03` / `123456`

## Catatan
`template.xls` adalah template data. Setelah dikonversi menjadi Google Spreadsheet, **ID spreadsheet wajib diisi di `CFG.SPREADSHEET_ID` pada `Code.gs`**. Backend tidak lagi bergantung pada `getActiveSpreadsheet()`, sehingga lebih aman ketika dijalankan sebagai Web App.
