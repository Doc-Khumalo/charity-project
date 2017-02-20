import React from 'react';
import { expect } from 'chai';
import 'ignore-styles';
import sinon from 'sinon';
import request from 'request';
import { mount } from 'enzyme';
import Donors from './Donors';

var baseUrl = 'https://api.justgiving.com/cbbcb882/v1/charity/2116/donations;';

describe('Donors', () => {
    it('should render when all is ok', () => {
        expect(true).to.be.true;
    });

    it('calls componentDidMount', (done) => {
        sinon.spy(Donors.prototype, 'componentDidMount');
        const wrapper = mount(<Donors />);
        expect(Donors.prototype.componentDidMount.calledOnce).to.equal(true);
        done();
    });

    it('returns donors', () => {
       request.get({ url: baseUrl }),
         function (error, reponse, body) {
             expect(response.statusCode).to.equal(200);
         }
    });
});
