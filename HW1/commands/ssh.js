const os    = require('os');
const path  = require('path');
const child_process = require('child_process');

exports.command = 'ssh';
exports.desc = 'ssh into the VM';

exports.handler = async argv => {
    (async () => {
    
        await ssh();

    })();

};

async function ssh()
{
    let identifyFile = path.join(os.homedir(), '.bakerx', 'insecure_private_key');
    let sshCmd = `ssh -i "${identifyFile}" -p 2800 -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null vagrant@127.0.0.1 `;
    console.log(`Connecting with ${sshCmd}`);
    return child_process.execSync(sshCmd, {stdio: ['inherit', 'inherit', 'inherit']});
}

