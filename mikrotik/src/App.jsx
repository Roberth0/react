import { Client } from 'ssh2'

const conn = new Client();

/* let ssh = new SSH({
  host: "localhost",
  user: "itami",
  pass: "12"
})
*/

/*const sshToClient = (e) => {
  e.preventDefault()
  console.log("submit working")

  ssh.exec('echo $PATH', {
    out: function(stdout) {
      console.log(stdout);
    }
  }).start();
}
*/
const sshToClient = e => {
  e.preventDefault()

  conn.on('ready', () => {
    console.log('Client :: ready');
    conn.exec('uptime', (err, stream) => {
      if (err) throw err;
      stream.on('close', (code, signal) => {
        console.log('Stream :: close :: code: ' + code + ', signal: ' + signal);
        conn.end();
      }).on('data', (data) => {
        console.log('STDOUT: ' + data);
      }).stderr.on('data', (data) => {
        console.log('STDERR: ' + data);
      });
    });
  }).connect({
    host: '127.0.0.1',
    port: 22,
    username: 'itami',
    password: '12'
  });
}

function App() {
  return (
    <div>
      <form onSubmit={sshToClient}>
        <label>Username</label>
        <input type="text" required />

        <label>Password</label>
        <input type="password" required />

        <label>Address</label>
        <input type="text" required />
        <input type="submit" />
      </form>
    </div>
  )
}

export default App
