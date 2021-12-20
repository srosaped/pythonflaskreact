import pyodbc

class User:

    def getConnectionString(self):
        servername="localhost"
        port="1433"
        database="L4Gestao"
        username="L4GestaoUser"
        password="Pa$$w0rd"
        server="DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={};PORT={};DATABASE={};UID={};PWD={};".format(servername,port,database,username,password)
        return server

    def getUser(self,userid):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_ConsultarUtilizador ?"
        cursor.execute(sqlquery,userid)
        result=cursor.fetchall()
        users=[]
        for user in result:
            dic={"UserID":user[0],"PrimeiroNome":user[1],"UltimoNome":user[2],"Morada":user[3],"CPostal":user[4],"Telefone":user[5],"EMail":user[6],"Foto":user[7],"username":user[8],"password":user[9]}
            users.append(dic)
        conn.close()
        return users

    def getAllUsers(self):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_ConsultarUtilizadores"
        cursor.execute(sqlquery)
        result=cursor.fetchall()
        users=[]
        for user in result:
            dic={"UserID":user[0],"PrimeiroNome":user[1],"UltimoNome":user[2],"Morada":user[3],"CPostal":user[4],"Telefone":user[5],"EMail":user[6],"Foto":user[7],"username":user[8],"password":user[9]}
            users.append(dic)
        conn.close()
        return users

    def insertUser(self,firstname,lastname,address,postalcode,phonenumber,email,photo,username,password):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_InserirUtilizador ?,?,?,?,?,?,?,?,?"
        cursor.execute(sqlquery,firstname,lastname,address,postalcode,phonenumber,email,photo,username,password)
        conn.commit()
        conn.close()

    def updateUser(self,userid,firstname,lastname,address,postalcode,phonenumber,email,photo,username,password):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_AtualizarUtilizador ?,?,?,?,?,?,?,?,?,?"
        cursor.execute(sqlquery,userid,firstname,lastname,address,postalcode,phonenumber,email,photo,username,password)
        conn.commit()
        conn.close()

    def updateUserPersonalData(self,userid,firstname,lastname,address,postalcode,phonenumber,email,photo):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_AtualizarDadosPessoaisUtilizador ?,?,?,?,?,?,?,?"
        cursor.execute(sqlquery,userid,firstname,lastname,address,postalcode,phonenumber,email,photo)
        conn.commit()
        conn.close()

    def updateUserPassword(self,userid,password):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_NovaPassword ?,?"
        cursor.execute(sqlquery,userid,password)
        conn.commit()
        conn.close()
        result=[{'mensagem':'A sua palavra-chave foi alterada com sucesso!'}]
        return result

    def deleteUser(self,userid):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_ApagarUtilizador ?"
        cursor.execute(sqlquery,userid)
        conn.commit()
        conn.close()

    def login(self, username, password):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_Login ?,?"
        cursor.execute(sqlquery,username,password)
        result=cursor.fetchall()
        login=[]
        for user in result:
            dic={"UserID":user[0],"SessionID":user[1],"Nome":user[2]}
            login.append(dic)
        conn.close()
        return login

    def sendEmail(self, email):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_RecuperarPassword ?"
        cursor.execute(sqlquery,email)
        conn.commit()
        conn.close()
        message=[{'mensagem':'Foi enviada uma mensagem para o e-mail indicado!'}]
        return message