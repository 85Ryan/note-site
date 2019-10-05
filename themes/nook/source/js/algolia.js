/* Algolia search javascript */
/* global jQuery algoliasearch instantsearch */

(function($) {
  $(document).ready(function() {
    const algoliaConfig = document.querySelector('meta[property="algolia:search"]').dataset;
    const algoliaLabel = document.querySelector('meta[property="algolia:label"]').dataset;
    var isAlgoliaConfigValid =
      algoliaConfig.applicationId && algoliaConfig.apiKey && algoliaConfig.indexName;

    if (!isAlgoliaConfigValid) {
      window.console.error('Algolia Settings are invalid.');
      return;
    }

    const searchClient = algoliasearch(algoliaConfig.applicationId, algoliaConfig.apiKey);

    const search = instantsearch({
      indexName: algoliaConfig.indexName,
      searchClient
    });

    search.addWidget(
      instantsearch.widgets.searchBox({
        container: '#algolia-search-input',
        showLoadingIndicator: false,
        autofocus: true,
        showReset: false,
        placeholder: algoliaLabel.input_placeholder
      })
    );

    search.addWidget(
      instantsearch.widgets.hits({
        container: '#algolia-hits',
        templates: {
          empty: algoliaLabel.hits_empty,
          item: `
                <a href="{{permalink}}" class="ais-Hits-item-link">{{title}}</a>
                `
        }
      })
    );

    search.addWidget(
      instantsearch.widgets.pagination({
        container: '#algolia-pagination',
        scrollTo: false,
        totalPages: 10
      })
    );

    search.start();

    $('.popup-trigger').on('click', function(e) {
      e.stopPropagation();
      $('.site-search').toggle();
      $('#algolia-search-input')
        .find('input')
        .focus();
    });

    $('.popup-btn-close').click(function() {
      $('.site-search').hide();
      $('body').css('overflow', '');
    });
  });
})(jQuery);
