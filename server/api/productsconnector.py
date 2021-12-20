import pyodbc

class Product:

    def getConnectionString(self):
        servername="localhost"
        port="1433"
        database="L4Gestao"
        username="L4GestaoUser"
        password="Pa$$w0rd"
        server="DRIVER={{ODBC Driver 17 for SQL Server}};SERVER={};PORT={};DATABASE={};UID={};PWD={};".format(servername,port,database,username,password)
        return server

    def getProduct(self,productid):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_ConsultarProduto ?"
        cursor.execute(sqlquery,productid)
        result=cursor.fetchall()
        products=[]
        for product in result:
            dic={"ProductID":product[0],"ProductName":product[1],"ProductDescription":product[2],"MeasureUnit":product[3],"UnitPrice":product[4],"VAT":product[5]}
            products.append(dic)
        conn.close()
        return products

    def getAllProducts(self):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_ConsultarProdutos"
        cursor.execute(sqlquery)
        result=cursor.fetchall()
        products=[]
        for product in result:
            dic={"ProductID":product[0],"ProductName":product[1],"ProductDescription":product[2],"MeasureUnit":product[3],"UnitPrice":product[4],"VAT":product[5]}
            products.append(dic)
        conn.close()    
        return products

    def insertProduct(self,productname,productdescription,measureunit,unitprice,vat):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_InserirProduto ?,?,?,?,?"
        cursor.execute(sqlquery,productname,productdescription,measureunit,unitprice,vat)
        conn.commit()
        conn.close()

    def updateProduct(self,productid,productname,productdescription,measureunit,unitprice,vat):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_AtualizarProduto ?,?,?,?,?,?"
        cursor.execute(sqlquery,productid,productname,productdescription,measureunit,unitprice,vat)
        conn.commit()
        conn.close()

    def deleteProduct(self,productid):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_ApagarProduto ?"
        cursor.execute(sqlquery,productid)
        conn.commit()
        conn.close()

    def getStore(self):
        conn=pyodbc.connect(self.getConnectionString())
        cursor=conn.cursor()
        sqlquery="EXEC dbo.SP_ConsultarLoja"
        cursor.execute(sqlquery)
        result=cursor.fetchall()
        products=[]
        for product in result:
            dic={"ProdutoID":product[0],"Nome":product[1],"Descricao":product[2],"PrecoUnitario":product[3],"Foto":product[4]}
            products.append(dic)
        conn.close()    
        return products