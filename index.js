<script>
let num = parseInt(prompt("Digite um

número para exibir a tabuada:"));

let i = 1;
let resultado;
alert("Tabuada do " + num + ":");
while (i <= 10) {
resultado = num * i;
alert(num + " x " + i + " = " +

resultado);
i++;
}
</script>