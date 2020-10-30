import React, { useEffect } from "react";
import { connect } from "react-redux";
import { dispatcher } from "./../redux/actions/dispatchers";
const Contacto = ({ token, store }) => {
  useEffect(() => {
    console.log(token);
    console.log(store);
  }, [token, store]);

  return <div>contacto</div>;
};

const mapStateToProps = (store) => ({
  store: store,
  token: store.auth.token,
});

const mapDispatch = dispatcher(["addInfo", "setToken"]);

export default connect(mapStateToProps, mapDispatch)(Contacto);
