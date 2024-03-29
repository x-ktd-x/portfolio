/*
The MIT License

ShuffleText by IKEDA Yasunobu. Feb 3, 2012
Visit http://clockmaker.jp/blog for documentation, updates and examples.

Copyright (c) 2012-2021 IKEDA Yasunobu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/ 

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ShuffleText = factory());
  })(this, (function () { 'use strict';
  
    /**
     * ShuffleText is random text effect class for DOM Elements.
     * ShuffleTextはDOMエレメント用ランダムテキストクラスです。
     * @author IKEDA Yasunobu
     * @since 2012-02-07
     */
    var ShuffleText = /** @class */ (function () {
        /**
         * Constructor.
         * @param element DOMエレメントです。
         */
        function ShuffleText(element) {
            var _a;
            /**
             * The string for random text.
             * ランダムテキストに用いる文字列です。
             * @type {string}
             * @default 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
             */
            this.sourceRandomCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            /**
             * The string for effect space.
             * 空白に用いる文字列です。
             * @type {string}
             * @default '-'
             */
            this.emptyCharacter = "-";
            /**
             * The milli seconds of effect time.
             * エフェクトの実行時間（ミリ秒）です。
             * @type {number}
             * @default 600
             */
            this.duration = 1200;
            this._isRunning = false;
            this._originalStr = "";
            this._originalLength = 0;
            this._timeCurrent = 0;
            this._timeStart = 0;
            this._randomIndex = [];
            this._element = null;
            this._requestAnimationFrameId = 0;
            this._element = element;
            this.setText((_a = element.textContent) !== null && _a !== void 0 ? _a : "");
        }
        /**
         * Set new strings. テキストを設定します。
         * @param text テキスト文字列です。
         */
        ShuffleText.prototype.setText = function (text) {
            this._originalStr = text;
            this._originalLength = text.length;
        };
        Object.defineProperty(ShuffleText.prototype, "isRunning", {
            /**
             * It is running flag. 再生中かどうかを示すブール値です。
             * @returns {boolean}
             */
            get: function () {
                return this._isRunning;
            },
            enumerable: false,
            configurable: true
        });
        /** Play effect. 再生を開始します。 */
        ShuffleText.prototype.start = function () {
            var _this = this;
            this.stop();
            this._randomIndex = [];
            var str = "";
            for (var i = 0; i < this._originalLength; i++) {
                var rate = i / this._originalLength;
                this._randomIndex[i] = Math.random() * (1 - rate) + rate;
                str += this.emptyCharacter;
            }
            this._timeStart = new Date().getTime();
            this._isRunning = true;
            this._requestAnimationFrameId = requestAnimationFrame(function () {
                _this._onInterval();
            });
            if (this._element) {
                this._element.textContent = str;
            }
        };
        /** Stop effect. 停止します。 */
        ShuffleText.prototype.stop = function () {
            this._isRunning = false;
            cancelAnimationFrame(this._requestAnimationFrameId);
        };
        /**
         * Dispose this instance.
         * メモリ解放のためインスタンスを破棄します。
         */
        ShuffleText.prototype.dispose = function () {
            cancelAnimationFrame(this._requestAnimationFrameId);
            this._isRunning = false;
            this.duration = 0;
            this._originalStr = "";
            this._originalLength = 0;
            this._timeCurrent = 0;
            this._timeStart = 0;
            this._randomIndex = [];
            this._element = null;
            this._requestAnimationFrameId = 0;
        };
        /**
         * インターバルハンドラーです。
         * @private
         */
        ShuffleText.prototype._onInterval = function () {
            var _this = this;
            this._timeCurrent = new Date().getTime() - this._timeStart;
            var percent = this._timeCurrent / this.duration;
            var str = "";
            for (var i = 0; i < this._originalLength; i++) {
                if (percent >= this._randomIndex[i]) {
                    str += this._originalStr.charAt(i);
                }
                else if (percent < this._randomIndex[i] / 3) {
                    str += this.emptyCharacter;
                }
                else {
                    str += this.sourceRandomCharacter.charAt(Math.floor(Math.random() * this.sourceRandomCharacter.length));
                }
            }
            if (percent > 1) {
                str = this._originalStr;
                this._isRunning = false;
            }
            if (this._element) {
                this._element.textContent = str;
            }
            if (this._isRunning) {
                this._requestAnimationFrameId = requestAnimationFrame(function () {
                    _this._onInterval();
                });
            }
        };
        return ShuffleText;
    }());
  
    return ShuffleText;
  
  }));

var text = new ShuffleText(document.querySelector('.welcome'));
text.start();