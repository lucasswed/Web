/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   getFlag.js                                         :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: lucas-ma <lucas-ma@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/04/16 12:44:18 by lucas-ma          #+#    #+#             */
/*   Updated: 2023/04/16 14:44:09 by lucas-ma         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

const { profileEnd } = require('console')
const process = require('process')

const getFlag = (flag) => {
	const av = process.argv;
	
	return (av[av.indexOf(flag) + 1]);
}

module.exports = getFlag;