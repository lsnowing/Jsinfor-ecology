const fs = require('fs');
const gulp = require('gulp');
const mkdirp = require('mkdirp') // 创建文件任务
const minimist = require('minimist') //命令行传递参数
const options = minimist(process.argv.slice(2));//命令行传递参数 options:Object  gulp xxxx --xxx xx   // --后第一个是参数名 空格后跟值 可传多个

const packagesOptions = {
    main: `${__dirname}/packages`,
    defConfigure: `${__dirname}/defConfigure`,
}

/**
 * @Date: 2021-07-11 22:32:09
 * @Author: Billy
 * @LastEditors: Billy
 * @FunName: createFile
 * @Description: 创建文件并写入内容(文件已存在时不会进行创建/写入)
 * @Return: 
 * @param {*} path
 * @param {*} fileName
 * @param {*} fileType
 * @param {*} content
 */
function createFile(componentName, path, fileName, fileType, content = "") {
    let filePath = `${path}/${fileName}${fileType ? '.' + fileType : ""}`;
    let fullName = `${fileName}${fileType ? '.' + fileType : ""}`;
    let { defConfigure } = packagesOptions;
    switch (fullName) {
        case 'README.md':
            content = `# ${componentName.toUpperCase()}`;
            break;
        case 'index.js':
            content = fs.readFileSync(`${defConfigure}/${fullName}`, 'utf-8');
            break;
        case 'package.json':
            content = fs.readFileSync(`${defConfigure}/${fullName}`, 'utf-8');
            break;
        case 'LICENSE':
            content = fs.readFileSync(`${defConfigure}/${fullName}`, 'utf-8');
            break;
    }

    if (fullName.includes('.vue')) {
        content = fs.readFileSync(`${defConfigure}/defVue.vue`, 'utf-8');
    }
    fs.open(filePath, (err, fd) => {
        if (err) {
            fs.writeFile(filePath, content, (err) => {
                if (err) return console.log(err);
                console.log("成功创建组件文件:", filePath);
            });
        }
    })
}

/**
 * @Date: 2021-07-11 21:25:31
 * @Author: Billy
 * @LastEditors: Billy
 * @FunName: gulp c
 * @Description: 
 *  - 根据传入的名称,自动在packages文件夹内创建组件,并生成所需的文件夹以及文件夹
 * @Return: File
 * @param {*} options.name
 * @use gulp create --name xxx
 */
function createComponent(cb) {
    let { name } = options;
    let { main } = packagesOptions

    if (!name) return console.error('缺少模块名称');

    if (typeof name !== 'string') return console.error('项目文件夹只能是字符串');

    let componentPath = `${main}/${name}`;

    try {
        var stat = fs.statSync(componentPath);

        if (stat.isDirectory()) return console.error(`${name}组件已存在,请勿重复创建,当前组件路径为:${componentPath}`);
    } catch (e) {
        // 继续创建文件

    }

    let children = [
        {
            name: '__test__',
            type: 'folder'
        },
        {
            name: 'src',
            type: 'folder'
        },
        {
            name: 'stories',
            type: 'folder'
        },
        {
            name: 'LICENSE',
            type: 'file'
        },
        {
            name: 'README',
            type: 'file',
            fileType: 'md',
        },
        {
            name: 'api-extractor',
            type: 'file',
            fileType: 'json',
        },
        {
            name: 'index',
            type: 'file',
            fileType: 'js'
        },
        {
            name: 'package',
            type: 'file',
            fileType: 'json'
        }
    ]

    // 创建组件文件夹
    mkdirp.sync(componentPath);
    console.log("成功创建组件:", name);
    // 创建组件对应的目录
    children.map(async item => {
        switch (item.type) {
            case 'folder':
                mkdirp.sync(`${componentPath}/${item.name}`);
                if (item.name === 'src') {
                    createFile(name, `${componentPath}/src`, name, 'vue', content = "123");
                }
                console.log("成功创建子文件夹:", `${componentPath}/${item.name}`);
                break;
            case 'file':
                createFile(name, componentPath, item.name, item.fileType)
                break;
        }
    });


    cb();
}

gulp.task('create', gulp.series(createComponent));