import $ from 'jquery';

export function alljQuery() {
  // Filter
  $('#filter-all').click(function () {
    $('#filter-all').addClass('is-active');
  });
  $('[fs-cmsfilter-field="categorie"]').click(function () {
    $('#filter-all').removeClass('is-active');
  });

  // Scroll Top
  $('.scroll-top_component').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
}

export function updateCategorie() {
  // Mettez en commentaire les parties du code que vous voulez exécuter après le délai
  $('[position-horizontale]').each(function () {
    $(this).attr('position-horizontale', 'Centre');
  });

  $('[position-verticale]').each(function () {
    $(this).attr('position-verticale', 'Centre');
  });

  $('[asset-size]').each(function () {
    $(this).attr('asset-size', 'Large');
  });
}

export function updateAll() {
  // Parcourez tous les éléments .work_collection-item
  $('.work_collection-item').each(function () {
    // Sélectionnez les éléments enfants nécessaires pour le travail vidéo
    const $workItem = $(this);
    const $workVideoWrapper = $workItem.find('.work_video-wrapper');
    const $workHVideoText = $workVideoWrapper.find('.work_h-text');
    const $workVVideoText = $workVideoWrapper.find('.work_v-text');
    const $workSVideoText = $workVideoWrapper.find('.work_s-text');

    // Appliquez les attributs pour le travail vidéo
    $workVideoWrapper.attr('asset-size', $workSVideoText.text());
    $workItem.attr('position-horizontale', $workHVideoText.text());
    $workItem.attr('position-verticale', $workVVideoText.text());

    // Sélectionnez les éléments enfants nécessaires pour le travail image
    const $workImageWrapper = $workItem.find('.work_image-wrapper');
    const $workHImageText = $workImageWrapper.find('.work_h-text');
    const $workVImageText = $workImageWrapper.find('.work_v-text');
    const $workSImageText = $workImageWrapper.find('.work_s-text');

    // Appliquez les attributs pour le travail image
    $workImageWrapper.attr('asset-size', $workSImageText.text());
    $workItem.attr('position-horizontale', $workHImageText.text());
    $workItem.attr('position-verticale', $workVImageText.text());
  });
}
