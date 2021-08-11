# Frontend-Environment-with-Jekyll

## 注意事項
- `style.css`はgemなどの干渉を受ける可能性があるのでスタイルシート名に使用しない
- Sassファイルのコンパイルなどはnpm-scriptsで行うため、_config.ymlに`sass:　sass_dir: _sass`の追記は不要
- 

## 要改善点
- 現在のsassコンパイル手順が「多数のsassファイル => 多数のcssファイル => 1つのcssファイル」になっているのでsassファイル変更時のブラウザリロードが2回発生する。
webpackなどを使用すればこの点は改善されるだろうが、そのためには全ファイル分の`@forward`の記述が必要であったりと労力がいるので代替方法を検討中。
