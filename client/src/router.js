export default <Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={AppSplash}/>
    <Route path="demo" component={AppDemo}/>
  </Route>
</Router>