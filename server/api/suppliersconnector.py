import pyodbc

class Supplier:

    def getConnectionString(self):
        servername="localhost"
        port="1433"
        database="L4Gestao"
        username="L4GestaoUser"
        password="Pa$$w0rd"
        server="DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={};PORT={};DATABASE={};UID={};PWD={};".format(servername,port,database,username,password)
        return server

    def getSupplier(self,supplierid):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_ConsultarFornecedor ?"
        cursor.execute(sqlquery,supplierid)
        result=cursor.fetchall()
        suppliers=[]
        for supplier in result:
            dic={"FornecedorID":supplier[0],"Nome":supplier[1],"NIF":supplier[2],"Morada":supplier[3],"CPostal":supplier[4],"Telefone":supplier[5],"EMail":supplier[6]}
            suppliers.append(dic)
        conn.close()
        return suppliers

    def getAllSuppliers(self):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_ConsultarFornecedores"
        cursor.execute(sqlquery)
        result=cursor.fetchall()
        suppliers=[]
        for supplier in result:
            dic={"SupplierID":supplier[0],"Nome":supplier[1],"NIF":supplier[2],"Morada":supplier[3],"CPostal":supplier[4],"Telefone":supplier[5],"EMail":supplier[6]}
            suppliers.append(dic)
        conn.close()    
        return suppliers

    def insertSupplier(self,name,fiscalnumber,address,postalcode,phonenumber,email):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_InserirFornecedor ?,?,?,?,?,?"
        cursor.execute(sqlquery,name,fiscalnumber,address,postalcode,phonenumber,email)
        conn.commit()
        conn.close()

    def updateSupplier(self,supplierid,name,fiscalnumber,address,postalcode,phonenumber,email):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_AtualizarFornecedor ?,?,?,?,?,?,?"
        cursor.execute(sqlquery,supplierid,name,fiscalnumber,address,postalcode,phonenumber,email)
        conn.commit()
        conn.close()

    def deleteSupplier(self,supplierid):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_ApagarFornecedor ?"
        cursor.execute(sqlquery,supplierid)
        conn.commit()
        conn.close()