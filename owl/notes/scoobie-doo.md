<head> <link rel="icon" href="./favicon.ico" /> </head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
@import url("https://nyteowldave.github.io/owl/owl.css");
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<style>
body { text-align : center; }
textarea:hover {
	background : rgb( 25, 25, 12 );
	color : yellow;
}
</style>

<style>
#_T_ {
	border-radius : 7px;
	cursor : pointer;
	user-select : none;
	border : 1px solid transparent;
}
#_T_:hover {
	background : black;
	color      : mintcream;
	border     : 1px dotted gold;
}
</style>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

[me-tower]: <http://dave-tower/app/morpheus/owl/notes/scoobie-doo.html>
[me-morph]: <https://nyteowldave.github.io/owl/notes/scoobie-doo.html>

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

<h3 onclick="wap()" id="_T_"> API Notes </h3>

----------------------------------------------------------------

# Scoobie Team

----------------------------------------------------------------

| Character | Function Usage |
|-----------|-------------------------|
| Fred      | Unassigned              |
| Daphne    | Try-Catch Wrapper       |
| Velma     | Perform Event Handler   |
| Shaggy    | Try-Catch Wrapper       |
| Scoobie   | Try-Catch Wrapper       |

----------------------------------------------------------------

# Editions

> [Tower][me-tower]
> [Morpheus][me-morph]

----------------------------------------------------------------

<script>
; doc = ( document )
; doc . title = ( _T_.textContent ).trim()
</script>

<script>
; wop =( u )=> ( window.open( u, u ) )
; wap =( u )=> {
	const a = doc . createElement( "A" );
	u = ( String( u || "" ).trim() );
	a . href = ( u || "./" );
	a . click();
}
;
</script>

