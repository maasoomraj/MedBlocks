import web3 from './web3.js';
import Voting from './build/Voting.json';

const instance = new web3.eth.Contract(
    JSON.parse(Voting.interface),
    '0x9dF517c2299B2abF97603284252618395fb85Bc3'
);

export default instance;
