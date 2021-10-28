const path = require('path')

exports.createDirTemplate = function (dir,requesUrl) {
    return `
    <div>
        <h4>Directory ${requesUrl}</h4>
        <ul>
            ${dir.map(file => {
                const filepath = path.join(requesUrl,file);
                const fileurl = path.relative(__dirname,filepath);
                return `
                <li>
                    <a href="${fileurl}">${file}</a>
                </li>
                `
            })}
        </ul>
    </div>`
  }