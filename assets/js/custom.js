"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
jQuery(function ($) {
  // Vars

  var filterTerm = $(".post-filters__term:not(.block) input");
  var wrapper = $(".archive_posts");
  var pageNumber = ".nav-links .page-numbers";
  var loader = $(".loader-wrapper");
  var searchInput = $(".filter_search input");
  var filterHeader = $(".post-filters__taxonomy .search-tax-title");
  var filterInputs = $(".post-filters__terms");
  var clearFilters = $(".clear-filters");
  var removeSearch = $(".remove-search");
  var postTerm = ".post-term";
  var searchTimeout = null;
  var controller = null;

  // Prevent search form submit on enter

  $("#search-form-filter").on("keypress", function (event) {
    var keyPressed = event.keyCode || event.which;
    if (keyPressed === 13) {
      event.preventDefault();
      return false;
    }
  });
  var filterCounter = function filterCounter(taxonomy) {
    var inputs = $("input[data-taxonomy-name=".concat(taxonomy, "]"));
    var header = $(".search-tax-title[data-taxonomy-name=".concat(taxonomy, "]"));
    var findCounter = header.find(".terms-counter");
    var checkedInputs = inputs.filter(function (key, input) {
      return $(input).prop("checked");
    });
    if (checkedInputs.length) {
      var counter = $("<span class=\"terms-counter\"> ".concat(checkedInputs.length, " </span>"));
      if (findCounter.length == 0) {
        header.append(counter);
      } else {
        findCounter.html(checkedInputs.length);
      }
    } else {
      findCounter.remove();
    }
  };

  // Functions

  var termTriggerFilter = function termTriggerFilter(e) {
    var currentTerm = $(e.currentTarget);
    var term = currentTerm.data("term");
    $(".post-filters__term input[value='".concat(term, "']")).trigger("click");
    $([document.documentElement, document.body]).animate({
      scrollTop: wrapper.offset().top - 235
    }, 0);
  };
  var filter = function filter(e) {
    var currentTerm = $(e.currentTarget);
    var taxonomy = currentTerm.data("taxonomy-name");
    var termID = currentTerm.val();
    if (currentTerm.prop("checked") === true) {
      urlApi("filter-" + taxonomy, termID);
      filterCounter(taxonomy);
      ajaxCall();
    } else {
      urlApi("filter-" + taxonomy, termID, true);
      filterCounter(taxonomy);
      ajaxCall();
    }
  };
  var clearSearch = function clearSearch() {
    searchInput.val("");
    searchInput.trigger("keyup");
  };
  var search = function search(e) {
    e.preventDefault();
    var currentSearch = $(e.currentTarget);
    clearInterval(searchTimeout);
    searchTimeout = setTimeout(function () {
      var searchValue = currentSearch.val();
      if (searchValue != "") {
        urlApiSingle("filter-search", searchValue);
        removeSearch.show();
      } else {
        urlApiSingle("filter-search", searchValue, true);
        removeSearch.hide();
      }
      ajaxCall();
    }, 1200);
  };
  var pagination = function pagination(e) {
    e.preventDefault();
    var currentPage = $(e.currentTarget);
    var pageNumber;
    if (currentPage.hasClass("prev")) {
      pageNumber = $(".current").text();
      pageNumber = parseInt(pageNumber) - 1;
    } else if (currentPage.hasClass("next")) {
      pageNumber = $(".current").text();
      pageNumber = parseInt(pageNumber) + 1;
    } else {
      pageNumber = currentPage.text();
    }
    urlApiSingle("pageNumber", pageNumber);
    ajaxCall().then(function () {
      $([document.documentElement, document.body]).animate({
        scrollTop: wrapper.offset().top - 90
      }, 0);
    });
  };
  var clearFiltersAction = function clearFiltersAction(e) {
    var current = $(e.currentTarget);
    var inputs = current.siblings();
    $.each(inputs, function (index, input) {
      if ($(input).find("input").prop("checked")) {
        $(input).find("input").trigger("click");
      }
    });
  };
  var filterDropdownClose = function filterDropdownClose(e) {
    var target = $(e.target);
    if (target.closest(".post-filters__taxonomy").length === 0) {
      filterHeader.removeClass("active");
      filterInputs.fadeOut();
    }
  };
  var filterDropdown = function filterDropdown(e) {
    var current = $(e.currentTarget);
    if (current.hasClass("active")) {
      current.removeClass("active");
    } else {
      filterHeader.removeClass("active");
      filterInputs.fadeOut();
      current.addClass("active");
    }
    current.next().stop(true).fadeToggle();
  };
  var ajaxCall = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var url, getParams, data, signal, request, posts, paginationDOM;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (controller) {
              controller.abort();
            }
            loader.addClass("active");
            url = new URL(window.location.href);
            getParams = url.searchParams.toString();
            data = new FormData();
            data.append("action", "post_filter");
            data.append("nonce", theme.nonce);
            data.append("searchParams", getParams);
            controller = new AbortController();
            signal = controller.signal;
            _context.next = 12;
            return fetch(theme.ajaxUrl, {
              method: "POST",
              body: data,
              signal: signal
            });
          case 12:
            request = _context.sent;
            if (request.ok) {
              _context.next = 15;
              break;
            }
            throw new Error("HTTP error! status: ".concat(request.status));
          case 15:
            _context.next = 17;
            return request.json();
          case 17:
            posts = _context.sent;
            if (posts) {
              controller = null;
              wrapper.find(".grid_item").remove();
              wrapper.find(".filter-no-items").remove();
              wrapper.prepend(posts.postsHtml);
              paginationDOM = $(".nav-links");
              paginationDOM.replaceWith(posts.pagination);
            }
            loader.removeClass("active");
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function ajaxCall() {
      return _ref.apply(this, arguments);
    };
  }();
  var urlApiSingle = function urlApiSingle(param, term) {
    var deleteParam = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var url = new URL(window.location.href);
    url.searchParams.delete("pageNumber");
    if (deleteParam === true) {
      url.searchParams.delete(param);
    } else {
      url.searchParams.set(param, term);
    }
    history.pushState({}, "", url);
  };
  var urlApi = function urlApi(param, term) {
    var deleteTerm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var returnParams = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var urllocation = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : window.location.href;
    var url = new URL(urllocation);
    var oldTerms = url.searchParams.getAll(param);
    url.searchParams.delete("pageNumber");
    if (Array.isArray(oldTerms) && oldTerms.length !== 0) {
      if (deleteTerm === false) {
        oldTerms.push(term);
        url.searchParams.set(param, oldTerms.join("-"));
      } else {
        var input = $("#".concat(term));
        var isParent = input.data("parent");
        var oldTermsSplit = oldTerms[0].split("-");
        var indexToDelete = oldTermsSplit.indexOf(term);
        oldTermsSplit.splice(indexToDelete, 1);
        if (isParent) {
          var children = input.data("children");
          if (children) {
            var childrenArray = children.split("-");
            childrenArray.forEach(function (val) {
              if (oldTermsSplit.includes(val)) {
                var _indexToDelete = oldTermsSplit.indexOf(val);
                oldTermsSplit.splice(_indexToDelete, 1);
                var childInput = $("#".concat(val));
                childInput.prop("checked", false);
              }
            });
          }
        }
        if (oldTermsSplit.length === 0) {
          url.searchParams.delete(param);
        } else {
          url.searchParams.set(param, oldTermsSplit.join("-"));
        }
      }
    } else {
      url.searchParams.set(param, term);
    }
    if (returnParams === true) {
      return url;
    }
    history.pushState({}, "", url);
  };

  // Events

  filterTerm.on("change", filter);
  searchInput.on("keyup", search);
  removeSearch.on("click", clearSearch);
  $("body").on("click", pageNumber, pagination);
  $("body").on("click", filterDropdownClose);
  filterHeader.on("click", filterDropdown);
  clearFilters.on("click", clearFiltersAction);
  $("body").on("click", postTerm, termTriggerFilter);
});
"use strict";

jQuery(document).ready(function ($) {
  // Mobile navigation

  $(".menu-toggle").click(function () {
    $("#primary-menu").fadeToggle();
    $(this).toggleClass('menu-open');
  });

  // Sub Menu Trigger

  $(".sub-menu-trigger").click(function () {
    $(this).parent().toggleClass('sub-menu-open');
    $(this).siblings(".sub-menu").slideToggle();
  });

  // Accordion

  $(".st_accordion-header").click(function () {
    $(this).siblings(".st_accordion-body").slideToggle();
    $(this).parent('.st_accordion-item ').toggleClass('open');
  });

  // Tabs

  $('.st_tabs_nav li:first-child').addClass('active');
  $('.st_tabs_nav a').click(function (e) {
    e.preventDefault();
    // Check for active
    var tabLabels = $(this.closest('.container')).find('.st_tabs_nav li');
    tabLabels.removeClass('active');
    $(this).parent().addClass('active');

    // Display active tab
    var currentTab = $(this).data('tab');
    var currentsTabContent = $(this.closest('.container')).find('.st_tab');
    currentsTabContent.hide();
    $.each(currentsTabContent, function (key, tab) {
      var tabContentIndex = $(tab).data('tab');
      if (tabContentIndex === currentTab) {
        $(tab).show();
      }
    });
    return false;
  });
});