import React from 'react';
import { getPeople } from '../xhr/index';
import css from './Donors.css';

class Donors extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        getPeople().then(results => {
            this.setState({
                users: results.data.donations
            })
        })
    }

    render() {
        return (
          <div>
              <h3>Latest Donations</h3>
              <div className={css.donorWrapper}>
              {this.state.users.map(donor => {
                  return (
                    <div>
                        <img className={css.donorImage} src={donor.imageUrl} />
                        <p>Amount: {donor.currencyCode} {donor.amount}.00</p>
                        <p>Name: {donor.donorDisplayName}</p>
                        <p>Tax: {donor.estimatedTaxReclaim}.00</p>
                        <p>Message: {donor.message}</p>
                        <hr />
                    </div>
                  )
              })}
              </div>
          </div>
        );
    }
}

export default Donors;
