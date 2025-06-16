
import sqlite3
from sqlite3 import Error

class ProjectDatabase:
    def __init__(self, db_file):
        self.conn = None
        try:
            self.conn = sqlite3.connect(db_file)
            print("Connected to SQLite Database")
        except Error as e:
            print(e)

    def create_table(self):
        query = """
            CREATE TABLE IF NOT EXISTS projects (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                title TEXT NOT NULL,
                description TEXT NOT NULL,
                document BLOB,
                address TEXT NOT NULL,
                min_workforce INTEGER NOT NULL,
                work_details TEXT NOT NULL,
                start_date DATE NOT NULL,
                end_date DATE NOT NULL
            );
        """
        try:
            self.conn.execute(query)
            print("Table created successfully")
        except Error as e:
            print(e)

    def insert_project(self, project):
        query = """
            INSERT INTO projects (title, description, document, address, min_workforce, work_details, start_date, end_date)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?);
        """
        try:
            self.conn.execute(query, project)
            self.conn.commit()
            print("Project inserted successfully")
        except Error as e:
            print(e)

    def retrieve_projects(self):
        query = "SELECT * FROM projects;"
        try:
            cur = self.conn.cursor()
            cur.execute(query)
            rows = cur.fetchall()
            for row in rows:
                print(row)
        except Error as e:
            print(e)

# Example usage
db = ProjectDatabase("projects.db")
db.create_table()

# Insert a project
project = (
    "Sample Project",
    "This is a sample project",
    open("sample.pdf", "rb").read(),
    "123 Main St",
    5,
    "Sample work details",
    "2024-01-01",
    "2024-01-31"
)
db.insert_project(project)

# Retrieve all projects
db.retrieve_projects()
