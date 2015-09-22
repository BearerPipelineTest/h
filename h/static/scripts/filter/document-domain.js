'use strict';

var escapeHtml = require('escape-html');

module.exports = function() {
  /**
   * Return a nice displayable string representation of a document's domain.
   *
   * @returns {String} The document's domain in braces, e.g. '(example.com)'.
   *   Returns '' if the document has no domain or if the document's domain is
   *   the same as its title (because we assume that the title is already
   *   displayed elsewhere and displaying it twice would be redundant).
   *
   */
  function documentDomainFilter(document) {
    var domain = escapeHtml(document.domain || '');
    var title = escapeHtml(document.title || '');

    if (domain && domain !== title) {
      return '(' + domain + ')';
    } else {
      return '';
    }
  }
  return documentDomainFilter;
};
