from flask import Flask, render_template,request, redirect, url_for
from api.usersconnector import User
from api.customersconnector import Customer
from api.suppliersconnector import Supplier
from api.productsconnector import Product

app=Flask(__name__)

@app.route('/')
def inicio():
    return render_template('login.html',data=[{'message':''}])

@app.route('/login', methods=['POST'])
def login():
    username=request.form['username']
    password=request.form['password']
    user=User()
    resultado=user.login(username,password)
    if resultado[0]["UserID"]==0:
        return render_template('login.html',data=[{'message':'Nome de utilizador e/ou Palavra-chave incorrectos!'}])
    else:
        return render_template('dashboardprincipal.html',data=[{'SessionID':resultado[0]["SessionID"],'Nome':resultado[0]["Nome"]}])

@app.route('/contactos')
def contactos():
    return render_template('contactos.html')

@app.route('/dashboardclientes')
def dashboardclientes():
    customer=Customer()
    return render_template('dashboardclientes.html',data=customer.getAllCustomers())

@app.route('/consultarcliente/<customerid>')
def consultarcliente(customerid):
    customer=Customer()
    resultado=customer.getCustomer(customerid)
    resultado=dict(resultado)
    return resultado

@app.route('/consultarfornecedor/<supplierid>')
def consultarfornecedor(supplierid):
    supplier=Supplier()
    resultado=supplier.getSupplier(supplierid)
    resultado=dict(resultado)
    return resultado

@app.route('/consultarproduto/<productid>')
def consultarproduto(productid):
    product=Product()
    resultado=product.getProduct(productid)
    resultado=dict(resultado)
    return resultado

@app.route('/consultarutilizador/<userid>')
def consultarutilizador(userid):
    user=User()
    resultado=user.getUser(userid)
    resultado=dict(resultado)
    return resultado

@app.route('/apagarcliente/<customerid>')
def apagarcliente(customerid):
    customer=Customer()
    customer.deleteCustomer(customerid)
    return redirect(url_for('dashboardclientes'))

@app.route('/apagarfornecedor/<supplierid>')
def apagarfornecedor(supplierid):
    supplier=Supplier()
    supplier.deleteSupplier(supplierid)
    return redirect(url_for('dashboardfornecedores'))

@app.route('/apagarproduto/<produtoid>')
def apagarproduto(productid):
    product=Product()
    product.deleteProduct(productid)
    return redirect(url_for('dashboardprodutos'))

@app.route('/apagarutilizador/<userid>')
def apagarutilizador(userid):
    user=User()
    user.deleteUser(userid)
    return redirect(url_for('dashboardutilizadores'))

@app.route("/atualizarcliente", methods=["POST"])
def atualizarcliente():
    clienteid=request.form['numerocliente']
    nome=request.form['nomecliente']
    nif=request.form['nif']
    morada=request.form['morada']
    cpostal=request.form['cpostal']
    telefone=request.form['telefone']
    email=request.form['email']
    customer=Customer()
    customer.updateCustomer(clienteid,nome,nif,morada,cpostal,telefone,email)
    return redirect(url_for('dashboardclientes'))

@app.route("/atualizarfornecedor", methods=["POST"])
def atualizarfornecedor():
    fornecedorid=request.form['numerofornecedor']
    nome=request.form['nomefornecedor']
    nif=request.form['nif']
    morada=request.form['morada']
    cpostal=request.form['cpostal']
    telefone=request.form['telefone']
    email=request.form['email']
    supplier=Supplier()
    supplier.updateSupplier(fornecedorid,nome,nif,morada,cpostal,telefone,email)
    return redirect(url_for('dashboardfornecedores'))

@app.route("/atualizarproduto", methods=["POST"])
def atualizarproduto():
    numeroproduto=request.form['numeroproduto']
    designacaoproduto=request.form['designacaoproduto']
    descricaoproduto=request.form['descricaoproduto']
    unidademedida=request.form['unidademedida']
    precounitario=request.form['precounitario']
    taxaiva=request.form['taxaiva']
    foto=request.form['foto']
    product=Product()
    product.updateProduct(numeroproduto,designacaoproduto,descricaoproduto,unidademedida,precounitario,taxaiva,foto)
    return redirect(url_for('dashboardprodutos'))

@app.route("/atualizarutilizador", methods=["POST"])
def atualizarutilizador():
    numeroproduto=request.form['numeroproduto']
    designacaoproduto=request.form['designacaoproduto']
    descricaoproduto=request.form['descricaoproduto']
    unidademedida=request.form['unidademedida']
    precounitario=request.form['precounitario']
    taxaiva=request.form['taxaiva']
    foto=request.form['foto']
    product=Product()
    product.updateProduct(numeroproduto,designacaoproduto,descricaoproduto,unidademedida,precounitario,taxaiva,foto)
    return redirect(url_for('dashboardprodutos'))

@app.route("/inserircliente", methods=["POST"])
def inserircliente():
    nome=request.form['nomecliente']
    nif=request.form['nif']
    morada=request.form['morada']
    cpostal=request.form['cpostal']
    telefone=request.form['telefone']
    email=request.form['email']
    customer=Customer()
    customer.insertCustomer(nome,nif,morada,cpostal,telefone,email)
    return redirect(url_for('dashboardclientes'))

@app.route("/inserirfornecedor", methods=["POST"])
def inserirfornecedor():
    nome=request.form['nomefornecedor']
    nif=request.form['nif']
    morada=request.form['morada']
    cpostal=request.form['cpostal']
    telefone=request.form['telefone']
    email=request.form['email']
    supplier=Supplier()
    supplier.insertSupplier(nome,nif,morada,cpostal,telefone,email)
    return redirect(url_for('dashboardfornecedores'))

@app.route("/inserirproduto", methods=["POST"])
def inserirproduto():
    designacaoproduto=request.form['designacaoproduto']
    descricaoproduto=request.form['descricaoproduto']
    unidademedida=request.form['unidademedida']
    precounitario=request.form['precounitario']
    taxaiva=request.form['taxaiva']
    foto=request.form['foto']
    product=Product()
    product.insertProduct(designacaoproduto,descricaoproduto,unidademedida,precounitario,taxaiva,foto)
    return redirect(url_for('dashboardprodutos'))

@app.route("/inserirutilizador", methods=["POST"])
def inserirutilizador():
    primeironomeutilizador=request.form['primeironomeutilizador']
    ultimonomeutilizador=request.form['ultimonomeutilizador']
    morada=request.form['morada']
    cpostal=request.form['cpostal']
    telefone=request.form['telefone']
    email=request.form['email']
    username=request.form['username']
    password=request.form['password']
    foto=request.form['foto']
    user=User()
    user.insertUser(primeironomeutilizador,ultimonomeutilizador,morada,cpostal,telefone,email,username,password,foto)
    return redirect(url_for('gestaoutilizadores'))

@app.route('/dashboardfornecedores')
def dashboardfornecedores():
    return render_template('dashboardfornecedores.html')

@app.route('/dashboardgestao')
def dashboardgestao():
    return render_template('dashboardgestao.html')

@app.route('/dashboardprincipal')
def dashboardprincipal():
    return render_template('dashboardprincipal.html')

@app.route('/dashboardprodutos')
def dashboardprodutos():
    return render_template('dashboardprodutos.html')


@app.route('/gestaoutilizadores')
def gestaoutilizadores():
    return render_template('gestaoutilizadores.html')

@app.route('/montraprodutos')
def montraprodutos():
    product=Product()
    return render_template('montraprodutos.html',data=product.getStore())

@app.route('/montraservicos')
def montraservicos():
    return render_template('montraservicos.html')

@app.route('/novapassword/<userid>')
def novapassword(userid):
    return render_template('novapassword.html',data=[{'UserID':userid}])

@app.route('/passwordalterada')
def passwordalterada():
    return render_template('passwordalterada.html')

@app.route('/perfil')
def perfil():
    return render_template('perfil.html')

@app.route('/quemsomos')
def quemsomos():
    return render_template('quemsomos.html')

@app.route('/recuperarpassword')
def recuperarpassword():
    return render_template('recuperarpassword.html')

@app.route('/enviarmailrecuperacao', methods=['POST'])
def enviarmailrecuperacao():
    email=request.form['email']
    user=User()
    resultado=user.sendEmail(email)
    return render_template('mensagemenviada.html',data=[{'mensagem':resultado[0]['mensagem']}])

@app.route('/guardarnovapassword', methods=['POST'])
def guardarnovapassword():
    print(request.form['UserID'])
    UserID=request.form['UserID']
    password=request.form['password']
    user=User()
    resultado=user.updateUserPassword(UserID,password)
    print(resultado[0]['mensagem'])
    return render_template('mensagemenviada.html',data=[{'mensagem':resultado[0]['mensagem']}])

if __name__=='__main__':
    app.debug= True
    app.run('localhost','5000')

