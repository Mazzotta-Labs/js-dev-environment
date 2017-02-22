/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for prod. May take a moment..'))

webpack(webpackConfig).run((err, stats) => {
    if (err) {
        console.log(chalk.red(err));
        return 1;
    } else {

        const jsonStats = stats.toJson();

        if(jsonStats.hasErrors){
            return jsonStats.errors.map(err=>console.log(chalk.red(err)));
        }

        if(jsonStats.hasWarnings){
            console.log(chalk.yellow('Webpack generated the following warnings: '));
            jsonStats.warnings.map(warn=>console.log(chalk.yellow(warn)));
        }

        console.log(`Webpack stats: ${stats}`);

        // if success
        console.log(chalk.green('App has been build successfully for production to /dist'));

        return 0;
    }
});
