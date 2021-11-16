
class Pizza;
class pedidoCliente;
class pedidoCozinha;
class estoque;
pedidoCliente 
{
	var pizza =  ["Mars", "Jupyter","Mercury", "Customizada"];
	var tamanho = ["P","M","G"];

}
Pizza
{ 
	var igredientes;
	var tamanho;
	Pizza( tipo, tamanho)
	{
		this.igredientes = tipo ;
		this.tamanho = tamanho;
	}	

}
pedidoCozinha
{
	pizza = new Pizza( tipo, tamanho);
	pedidoCozinha (pedidoCliente.pizza,pedidoCozinha.tamanho)
	{
      pizza.tipo=pedidoCliente.pizza;
      pizza.tamanho=pedidoCozinha.tamanho;
	}
     
  

}

