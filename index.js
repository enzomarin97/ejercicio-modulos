import { suma, multiplica } from "./modulos/controller.js";
import chalk from 'chalk';

const producto = multiplica(suma(1, 2), suma(4, 5));
const str_prod = producto.toString();

const log = console.log;
log(chalk.blue('Hello') + ' World' + chalk.red('!'));
log(chalk.magenta("El resultado es: ") + chalk.green(str_prod));