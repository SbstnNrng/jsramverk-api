$(> db/testText.sqlite)
cat db/migrate.sql | sqlite3 db/testText.sqlite

$(> db/testReports.sqlite)
cat db/reports.sql | sqlite3 db/testReports.sqlite