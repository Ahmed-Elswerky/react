function Welcome(eo){
    return <h1>asdsa{eo.name}</h1>;
};
var name = new Date().toLocaleTimeString();
ReactDOM.render(
    <Welcome name="ahmmaa"/>,
    document.getElementById('id')
);