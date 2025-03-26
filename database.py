import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="saidpatt",
  password="Jesusislife24"
)

mycursor = mydb.cursor()

mycursor.execute("SHOW DATABASES")

for x in mycursor:
  print(x)