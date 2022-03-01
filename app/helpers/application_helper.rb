module ApplicationHelper
  def default_meta_tags
    {
      og: {
        site_name: 'Treasure Hunt',
        title: '宝探しミニゲーム',
        description: '宝ゲットであなたの勝ち。うんこゲットであなたの負けです。', 
        type: 'website',
        url: request.original_url,
        image: image_url('ogp.png'),
        locale: 'ja_JP',
      }
    }
  end
end
