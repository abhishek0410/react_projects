import React from "react";
//import * as PropTypes from "prop-types";
import * as Auth from "../index";

import LoginView from "./view";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import validator from "validator";

import {
  getData
  // generateUserAssetMap,
  // generateUserTicketMap
} from "H:/react_projects/delv_testing_1/src/modules/app/services";

export function loadAppData(user, org_id, sender) {
  sender.props.setIsFetching(true);

  getData(user, org_id, 500)
    .then(function(result) {
      console.log(result);

      sender.props.setIsFetching(false);

      sender.props.setUsers(result.users);
      // sender.props.setAssets(result.assets);
      // sender.props.setNotificationsSectionId(result.notificationsSectionId);
      // sender.props.setUserAssetMap(generateUserAssetMap(result.assets));
      // sender.props.setUserTicketMap(generateUserTicketMap(result.tickets));
      // sender.props.setPolicy(result.policy);
      // sender.props.setTickets(result.tickets);
      // sender.props.setSims(result.sims);
      // sender.props.setLocations(result.locations);
      // sender.props.setProducts(result.products);
      // sender.props.setCostCentres(result.costcentres);
      // sender.props.setAssetHistory(result.asset_history);
      // sender.props.setMongoViews(result.mongo_views);
      sender.props.setChanges(result.changes);

      var showAssets = false;
      var isReadOnly = true;
      var isAdmin = false;

      sender.props.setOrganizations(result.organizations);

      if (sender.props.user.organization_id === 3588421268) {
        isReadOnly = false;
        showAssets = true;
        isAdmin = true;
      } else {
        for (let i = 0; i < result.organizations.length; i++) {
          if (
            result.organizations[i].id === sender.props.user.organization_id
          ) {
            if (result.organizations[i].organization_fields) {
              if (
                typeof result.organizations[i].organization_fields
                  .asset_management_visible !== "undefined"
              ) {
                showAssets =
                  result.organizations[i].organization_fields
                    .asset_management_visible;
              }

              if (
                typeof result.organizations[i].organization_fields
                  .asset_management_purchased !== "undefined"
              ) {
                isReadOnly =
                  result.organizations[i].organization_fields
                    .asset_management_purchased;
              }
            }
          }
        }
      }

      if (org_id) {
        sender.props.setSelectedOrganization(org_id);
      } else {
        sender.props.setSelectedOrganization(user.organization_id);
      }

      sender.props.setShowAssets(showAssets);
      sender.props.setReadOnly(isReadOnly);
      sender.props.setAdminAccess(isAdmin);

      if (typeof sender.context !== "undefined") {
        sender.context.router.push({
          pathname: "/app/dashboard"
        });
      }
    })
    .catch(error => {
      sender.props.setIsFetching(false);

      console.log(error);
    });
}

class LoginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.login = this.login.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  updateEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  updatePassword(e) {
    e.preventDefault();
    this.setState({
      password: e.target.value
    });
  }

  onKeyPress(e) {
    //
    if (e.key === "Enter") {
      console.log("do validate");
    }
  }

  componentDidMount() {
    this.props.setIsFetching(false);
  }

  login(e) {
    e.preventDefault();

    //check login values have been entered
    if (this.state.email === "" || this.state.password === "") {
      this.props.fetchingError(
        "Ensure email/password fields are both completed."
      );
      return;
    }

    if (!validator.isEmail(this.state.email)) {
      this.props.fetchingError("Ensure a valid email is entered");
      return;
    }

    this.props.setIsFetching(true);

    var This = this;

    Auth.login(this.state.email, this.state.password)
      .then(user => {
        if (user.data.id) {
          this.props.setUserToken("Basic " + user.userToken);
          this.props.setUser(user.data);
          loadAppData(user.data, null, This);
        } else {
          this.props.fetchingError("invalid credentials");
          this.props.setIsFetching(false);
          setTimeout(
            function() {
              this.props.fetchingError(null);
            }.bind(this),
            2000
          );
        }
      })
      .catch(err => {
        alert(err);
        this.props.setIsFetching(false);
      });
  }

  render() {
    return (
      <LoginView
        login={this.login}
        email={this.state.email}
        password={this.state.password}
        onUpdateEmail={this.updateEmail}
        onUpdatePassword={this.updatePassword}
        isFetching={this.props.isFetching}
        error={this.props.error}
        user={this.props.user}
        clearError={this.props.clearError}
        setIsFetching={this.props.setIsFetching}
      />
    );
  }
}
// LoginComponent.PropTypes = {
//   setIsFetching: PropTypes.func.isRequired
// };

function injectReduxStateToProps(state) {
  const auth = state.get("auth").toJS();
  return {
    user: auth.user,
    isFetching: auth.isFetching,
    error: auth.error
  };
}

// function injectReduxActions(dispatch) {
//   return bindActionCreators(
//     Object.assign({}, AuthStateActions, AppStore.actionCreators),
//     dispatch
//   );
// }
export default connect(injectReduxStateToProps)(LoginComponent);
