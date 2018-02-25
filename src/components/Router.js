import React from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Loadable from 'react-loadable';

const MyLoadingComponent = (props) => {
  if (props.error) {
    return <AsyncFourOFour />;
  } else if (props.timedOut) {
    return <AsyncFourOFour message="Slow Connection detected. Try refreshing your page" />;
  } else if (props.pastDelay) {
    return <div />;
  }
  return null;
};

const AsyncFourOFour = Loadable({
  loader: () => import('./FourOFour'),
  loading: MyLoadingComponent,
  timeout: 12000,
  delay: 50,
});
const AsyncHome = Loadable({
  loader: () => import('./home/Home'),
  loading: MyLoadingComponent,
  timeout: 12000,
  delay: 50,
});
const AsyncContact = Loadable({
  loader: () => import('./Contact'),
  loading: MyLoadingComponent,
  timeout: 12000,
  delay: 50,
});
const AsyncHasHappened = Loadable({
  loader: () => import('./happen/HasHappened'),
  loading: MyLoadingComponent,
  timeout: 12000,
  delay: 50,
});
const AsyncIsHappening = Loadable({
  loader: () => import('./happen/IsHappening'),
  loading: MyLoadingComponent,
  timeout: 12000,
  delay: 50,
});
const AsyncWillHappen = Loadable({
  loader: () => import('./happen/WillHappen'),
  loading: MyLoadingComponent,
  timeout: 12000,
  delay: 50,
});

const Router = () => (
  <Switch>
    <Route exact path="/" component={AsyncHome} />
    <Route exact path="/has-happened" component={AsyncHasHappened} />
    <Route exact path="/is-happening" component={AsyncIsHappening} />
    <Route exact path="/will-happen" component={AsyncWillHappen} />
    <Route exact path="/contact" component={AsyncContact} />
    <Route path="/topics/:id" component={AsyncHome} />
    <Route component={AsyncFourOFour} />
  </Switch>
);

export default Router;
