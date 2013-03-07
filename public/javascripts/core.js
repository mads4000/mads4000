/**
 * Created with JetBrains WebStorm.
 * User: mads4000
 * Date: 25.01.13
 * Time: 12:19
 * To change this template use File | Settings | File Templates.
 */

$("a[rel=popover]")
    .popover()
    .click(function(e) {
        e.preventDefault()
    })