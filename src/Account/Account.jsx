import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// SVG Icon Components
const PositionsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17 19" fill="none" data-palette="PositionsIcon">
    <path d="M2.55148 10.6979L1.44653 9.53224L6.86197 4.01966L4.76136 1.94334L13.5523 0.886963L12.4353 9.52009L10.3589 7.60162L6.47342 11.1836L4.49424 9.36224L3.23144 17.8375L11.9253 16.7569L9.97038 14.7777L15.4465 9.36224L14.2809 8.16016" stroke="currentColor" fill="none" strokeLinecap="round"></path>
  </svg>
);

const SubAccountsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.6666 18.3333H11.9999V16.6667C11.9999 16.0036 11.7365 15.3677 11.2677 14.8989C10.7988 14.4301 10.163 14.1667 9.49992 14.1667H4.49992C3.83688 14.1667 3.20099 14.4301 2.73215 14.8989C2.26331 15.3677 1.99992 16.0036 1.99992 16.6667V18.3333H0.333252V16.6667C0.333252 15.5616 0.772239 14.5018 1.55364 13.7204C2.33504 12.939 3.39485 12.5 4.49992 12.5H9.49992C10.605 12.5 11.6648 12.939 12.4462 13.7204C13.2276 14.5018 13.6666 15.5616 13.6666 16.6667V18.3333ZM6.99992 10.8333C6.34331 10.8333 5.69313 10.704 5.0865 10.4527C4.47987 10.2015 3.92868 9.83316 3.46438 9.36887C3.00009 8.90458 2.63179 8.35338 2.38052 7.74675C2.12925 7.14013 1.99992 6.48995 1.99992 5.83334C1.99992 5.17673 2.12925 4.52655 2.38052 3.91992C2.63179 3.31329 3.00009 2.7621 3.46438 2.2978C3.92868 1.83351 4.47987 1.46521 5.0865 1.21394C5.69313 0.962665 6.34331 0.833336 6.99992 0.833336C8.326 0.833336 9.59777 1.36012 10.5355 2.2978C11.4731 3.23548 11.9999 4.50725 11.9999 5.83334C11.9999 7.15942 11.4731 8.43119 10.5355 9.36887C9.59777 10.3066 8.326 10.8333 6.99992 10.8333ZM6.99992 9.16667C7.88397 9.16667 8.73182 8.81548 9.35694 8.19036C9.98206 7.56524 10.3332 6.71739 10.3333 5.83334C10.3332 4.94928 9.98206 4.10143 9.35694 3.47631C8.73182 2.85119 7.88397 2.5 6.99992 2.5C6.11586 2.5 5.26802 2.85119 4.64289 3.47631C4.01777 4.10143 3.66658 4.94928 3.66658 5.83334C3.66658 6.71739 4.01777 7.56524 4.64289 8.19036C5.26802 8.81548 6.11586 9.16667 6.99992 9.16667Z" fill="currentColor" stroke="var(--main-bg-surface)" strokeWidth="0.4"></path>
  </svg>
);

const PNLAnalyticsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-palette="PNLAnalyticsLight">
    <path d="M9.00008 17.3333C4.39758 17.3333 0.666748 13.6025 0.666748 9C0.666748 5.26833 3.11925 2.11 6.50008 1.04833V2.81833C5.06752 3.40004 3.88158 4.46142 3.14513 5.82093C2.40868 7.18044 2.16748 8.75359 2.46279 10.2713C2.7581 11.789 3.57157 13.1569 4.76405 14.1411C5.95653 15.1253 7.45392 15.6646 9.00008 15.6667C10.3282 15.6666 11.6261 15.27 12.7275 14.5277C13.8288 13.7854 14.6834 12.7311 15.1817 11.5H16.9517C15.8901 14.8808 12.7317 17.3333 9.00008 17.3333ZM17.2917 9.83333H8.16675V0.708333C8.44091 0.680833 8.71925 0.666666 9.00008 0.666666C13.6026 0.666666 17.3334 4.3975 17.3334 9C17.3334 9.28083 17.3192 9.55917 17.2917 9.83333ZM9.83341 2.385V8.16666H15.6151C15.4296 6.698 14.7608 5.33278 13.7141 4.28603C12.6673 3.23928 11.3021 2.57049 9.83341 2.385Z" fill="currentColor" stroke="var(--main-bg-surface)" strokeWidth="0.4"></path>
  </svg>
);

const BankDetailsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18" width="18" height="18" data-palette="Bank">
    <path fill="currentColor" stroke="currentColor" strokeWidth="0.4" d="M.667 15.667h16.666v1.666H.667v-1.666ZM2.333 9H4v5.833H2.333V9ZM6.5 9h1.667v5.833H6.5V9Zm3.333 0H11.5v5.833H9.833V9ZM14 9h1.667v5.833H14V9ZM.667 4.833 9 .667l8.333 4.166v3.334H.667V4.833Zm1.666 1.03V6.5h13.334v-.637L9 2.53 2.333 5.863ZM9 5.667A.833.833 0 1 1 9 4a.833.833 0 0 1 0 1.667Z"></path>
  </svg>
);

const AddFundsIcon = () => (
  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-palette="DepositsIcon">
    <path d="M10.6667 8.16666V5.66666L6.50008 9L10.6667 12.3333V9.83333H18.1667V8.16666H10.6667ZM16.9517 11.5H15.1817C14.6 12.9326 13.5387 14.1185 12.1792 14.8549C10.8196 15.5914 9.24649 15.8326 7.72879 15.5373C6.21109 15.242 4.84316 14.4285 3.85898 13.236C2.87479 12.0435 2.33553 10.5462 2.33342 9C2.33255 7.45221 2.87027 5.95236 3.85433 4.75768C4.8384 3.56301 6.20749 2.74796 7.72678 2.45234C9.24607 2.15672 10.8209 2.39895 12.1811 3.13748C13.5413 3.87601 14.6022 5.06481 15.1817 6.5H16.9517C15.8901 3.11916 12.7317 0.666664 9.00008 0.666664C4.39758 0.666664 0.666748 4.3975 0.666748 9C0.666748 13.6025 4.39758 17.3333 9.00008 17.3333C12.7317 17.3333 15.8901 14.8808 16.9517 11.5Z" fill="currentColor" stroke="var(--main-bg-surface)" strokeWidth="0.4"></path>
  </svg>
);

const WithdrawIcon = () => (
  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-palette="WithdrawalsIcon">
    <path d="M9.00008 17.3333C4.39758 17.3333 0.666748 13.6025 0.666748 9C0.666748 4.3975 4.39758 0.666666 9.00008 0.666666C10.294 0.665694 11.5702 0.966477 12.7275 1.54512C13.8848 2.12376 14.8912 2.96431 15.6667 4H13.4084C12.4461 3.15147 11.2594 2.59863 9.99068 2.40783C8.72196 2.21703 7.42514 2.39638 6.25582 2.92434C5.08651 3.45231 4.09437 4.30647 3.39847 5.38432C2.70257 6.46218 2.33247 7.71794 2.33258 9.00092C2.33269 10.2839 2.703 11.5396 3.39908 12.6173C4.09515 13.6951 5.08743 14.5491 6.25683 15.0768C7.42624 15.6046 8.72309 15.7837 9.99178 15.5927C11.2605 15.4017 12.4471 14.8487 13.4093 14H15.6676C14.8919 15.0358 13.8854 15.8764 12.728 16.4551C11.5705 17.0337 10.2941 17.3344 9.00008 17.3333ZM14.8334 12.3333V9.83333H8.16675V8.16667H14.8334V5.66667L19.0001 9L14.8334 12.3333Z" fill="currentColor" stroke="var(--main-bg-surface)" strokeWidth="0.4"></path>
  </svg>
);

const TradingBotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 20 20" data-palette="SignalTradingIcon">
    <path fill="currentColor" fillRule="evenodd" d="M12.084 5.833a3.333 3.333 0 1 1 6.666 0 3.333 3.333 0 0 1-6.666 0Zm3.333-2.577a2.577 2.577 0 1 0 0 5.154 2.577 2.577 0 0 0 0-5.154Z" clipRule="evenodd"></path>
    <path fill="currentColor" fillRule="evenodd" d="M15.417 3.733c.209 0 .378.154.378.343v.187c.293.065.577.194.776.374a.32.32 0 0 1 0 .485.406.406 0 0 1-.535 0c-.123-.112-.382-.213-.63-.219-.142-.003-.232.026-.276.057-.03.02-.074.061-.074.187 0 .046.01.065.017.074.007.01.022.029.062.051.094.055.236.093.455.147l.024.006c.185.046.437.108.639.224a.894.894 0 0 1 .305.278c.083.126.124.27.124.425 0 .342-.17.61-.435.779a1.312 1.312 0 0 1-.452.174v.252c0 .19-.17.343-.378.343-.21 0-.378-.153-.378-.343v-.27c-.31-.07-.612-.22-.812-.461a.322.322 0 0 1 .077-.48.405.405 0 0 1 .53.069c.102.124.333.227.596.235.17.006.304-.03.383-.081.065-.04.112-.1.112-.217 0-.045-.01-.065-.016-.074a.177.177 0 0 0-.063-.05c-.094-.055-.236-.093-.455-.148l-.024-.005c-.185-.046-.436-.108-.638-.224a.893.893 0 0 1-.306-.279.759.759 0 0 1-.123-.425c0-.31.13-.567.373-.734.112-.077.238-.127.366-.157v-.18c0-.19.169-.343.378-.343Zm-.014 3.602.014-.342-.014.342Z" clipRule="evenodd"></path>
    <path fill="currentColor" stroke="currentColor" strokeWidth="0.2" d="M3.454 14.583v-1.25h-.993a.652.652 0 0 1-.48-.193.652.652 0 0 1-.193-.48V5.68A.658.658 0 0 1 2.46 5h.993V3.75c0-.118.04-.217.12-.297.08-.08.18-.12.297-.12.118 0 .217.04.297.12.08.08.12.18.12.297V5h.993c.191 0 .351.064.48.193a.652.652 0 0 1 .193.48v6.98a.659.659 0 0 1-.673.68h-.993v1.25A.407.407 0 0 1 3.87 15a.403.403 0 0 1-.297-.12.401.401 0 0 1-.12-.297ZM2.621 12.5h2.5V5.833h-2.5V12.5Z"></path>
    <path fill="currentColor" d="M8.454 14.583v-2.916h-.993a.652.652 0 0 1-.48-.194.652.652 0 0 1-.193-.48V7.347a.658.658 0 0 1 .673-.68h.993v-1.25c0-.119.04-.218.12-.297.08-.08.18-.12.297-.12.118 0 .217.04.297.12.08.08.12.179.12.297v1.25h.993c.191 0 .351.064.48.193a.652.652 0 0 1 .193.48v3.647a.658.658 0 0 1-.673.68h-.993v2.916A.408.408 0 0 1 8.87 15a.403.403 0 0 1-.297-.12.401.401 0 0 1-.12-.297Zm-.833-3.75h2.5V7.5h-2.5v3.333Z"></path>
    <path fill="currentColor" fillRule="evenodd" d="m15.427 11.95-4.388 4.728c-.24.259-.576.405-.928.405H2.084a.417.417 0 0 1 0-.833H9.77c.338 0 .66-.14.89-.389l4.156-4.478.61.567Z" clipRule="evenodd"></path>
    <path fill="currentColor" fillRule="evenodd" d="M15.109 11.334a.333.333 0 0 1 .345.32l.112 2.998a.333.333 0 1 1-.666.025l-.082-2.194-4.092 4.41-.489-.453 4.092-4.41-2.193.082a.333.333 0 1 1-.025-.667l2.998-.111Z" clipRule="evenodd"></path>
  </svg>
);

const ProfileIcon = () => (
  <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg" data-palette="MenuProfileIcon">
    <path d="M0.333252 18.3333C0.333252 16.5652 1.03563 14.8695 2.28587 13.6193C3.53612 12.369 5.23181 11.6667 6.99992 11.6667C8.76803 11.6667 10.4637 12.369 11.714 13.6193C12.9642 14.8695 13.6666 16.5652 13.6666 18.3333H0.333252ZM7.83325 13.4025V16.6667H11.7157C11.4179 15.8262 10.9009 15.0805 10.2184 14.5066C9.53582 13.9328 8.71242 13.5516 7.83325 13.4025ZM6.16658 16.6667V13.4025C5.28741 13.5516 4.46401 13.9328 3.78146 14.5066C3.09891 15.0805 2.58198 15.8262 2.28408 16.6667H6.16658ZM6.99992 10.8333C4.23742 10.8333 1.99992 8.59583 1.99992 5.83333C1.99992 3.07083 4.23742 0.833328 6.99992 0.833328C9.76242 0.833328 11.9999 3.07083 11.9999 5.83333C11.9999 8.59583 9.76242 10.8333 6.99992 10.8333ZM6.99992 9.16666C8.84158 9.16666 10.3333 7.675 10.3333 5.83333C10.3333 3.99166 8.84158 2.5 6.99992 2.5C5.15825 2.5 3.66658 3.99166 3.66658 5.83333C3.66658 7.675 5.15825 9.16666 6.99992 9.16666Z" fill="currentColor" stroke="var(--main-bg-surface)" strokeWidth="0.4"></path>
  </svg>
);

const PreferencesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-palette="PreferencesIcon">
    <path d="M1.78326 13.1667C1.43099 12.5575 1.15715 11.9062 0.968262 11.2283C1.37935 11.0193 1.72459 10.7005 1.96579 10.3074C2.20698 9.91431 2.33473 9.46214 2.33491 9.00093C2.33508 8.53973 2.20767 8.08746 1.96676 7.69417C1.72586 7.30088 1.38086 6.9819 0.969928 6.77251C1.34663 5.41041 2.06387 4.16663 3.05409 3.15834C3.44084 3.40978 3.88961 3.54931 4.35074 3.56149C4.81188 3.57367 5.26739 3.45803 5.66687 3.22737C6.06635 2.9967 6.39422 2.66 6.6142 2.25454C6.83418 1.84907 6.93768 1.39065 6.91326 0.930005C8.28169 0.576357 9.71762 0.57693 11.0858 0.931672C11.0616 1.39231 11.1653 1.85066 11.3854 2.25601C11.6056 2.66136 11.9336 2.9979 12.3331 3.22839C12.7327 3.45888 13.1882 3.57433 13.6493 3.56196C14.1104 3.5496 14.5591 3.40991 14.9458 3.15834C15.4283 3.65001 15.8566 4.20917 16.2166 4.83334C16.5774 5.45751 16.8474 6.10834 17.0316 6.77167C16.6205 6.98076 16.2753 7.29948 16.0341 7.69259C15.7929 8.0857 15.6651 8.53787 15.665 8.99908C15.6648 9.46028 15.7922 9.91255 16.0331 10.3058C16.274 10.6991 16.619 11.0181 17.0299 11.2275C16.6532 12.5896 15.936 13.8334 14.9458 14.8417C14.559 14.5902 14.1102 14.4507 13.6491 14.4385C13.188 14.4263 12.7325 14.542 12.333 14.7726C11.9335 15.0033 11.6056 15.34 11.3857 15.7455C11.1657 16.1509 11.0622 16.6094 11.0866 17.07C9.71817 17.4237 8.28224 17.4231 6.91409 17.0683C6.9383 16.6077 6.83459 16.1493 6.61445 15.744C6.3943 15.3387 6.0663 15.0021 5.66674 14.7716C5.26718 14.5411 4.81164 14.4257 4.35053 14.438C3.88943 14.4504 3.44073 14.5901 3.05409 14.8417C2.56159 14.3391 2.13459 13.7763 1.78326 13.1667ZM6.49993 13.33C7.38795 13.8422 8.05563 14.6642 8.37493 15.6383C8.79076 15.6775 9.20826 15.6783 9.62409 15.6392C9.9436 14.6649 10.6116 13.8429 11.4999 13.3308C12.3876 12.8172 13.4337 12.6496 14.4374 12.86C14.6791 12.52 14.8874 12.1575 15.0608 11.7783C14.377 11.0145 13.9992 10.0252 13.9999 9.00001C13.9999 7.95001 14.3916 6.96917 15.0608 6.22167C14.8862 5.84263 14.677 5.48053 14.4358 5.14001C13.4327 5.35026 12.3873 5.1829 11.4999 4.67001C10.6119 4.15782 9.94422 3.33582 9.62493 2.36167C9.2091 2.32251 8.79159 2.32167 8.37576 2.36084C8.05626 3.33513 7.38826 4.15714 6.49993 4.66917C5.61225 5.18277 4.56616 5.35044 3.56243 5.14001C3.32123 5.48024 3.11254 5.84239 2.9391 6.22167C3.6229 6.98547 4.00066 7.97483 3.99993 9.00001C3.99993 10.05 3.60826 11.0308 2.9391 11.7783C3.11365 12.1574 3.32288 12.5195 3.5641 12.86C4.56719 12.6497 5.6126 12.8171 6.49993 13.33ZM8.99993 11.5C8.33689 11.5 7.701 11.2366 7.23216 10.7678C6.76332 10.2989 6.49993 9.66305 6.49993 9.00001C6.49993 8.33696 6.76332 7.70108 7.23216 7.23224C7.701 6.7634 8.33689 6.50001 8.99993 6.50001C9.66297 6.50001 10.2989 6.7634 10.7677 7.23224C11.2365 7.70108 11.4999 8.33696 11.4999 9.00001C11.4999 9.66305 11.2365 10.2989 10.7677 10.7678C10.2989 11.2366 9.66297 11.5 8.99993 11.5ZM8.99993 9.83334C9.22094 9.83334 9.4329 9.74554 9.58918 9.58926C9.74546 9.43298 9.83326 9.22102 9.83326 9.00001C9.83326 8.77899 9.74546 8.56703 9.58918 8.41075C9.4329 8.25447 9.22094 8.16667 8.99993 8.16667C8.77891 8.16667 8.56695 8.25447 8.41067 8.41075C8.25439 8.56703 8.1666 8.77899 8.1666 9.00001C8.1666 9.22102 8.25439 9.43298 8.41067 9.58926C8.56695 9.74554 8.77891 9.83334 8.99993 9.83334Z" fill="currentColor" stroke="var(--main-bg-surface)" strokeWidth="0.4"></path>
  </svg>
);

const SecurityIcon = () => (
  <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" data-palette="SecurityIcon">
    <path d="M1.1525 2.35501L8 0.833344L14.8475 2.35501C15.0326 2.39615 15.198 2.49915 15.3167 2.64701C15.4353 2.79488 15.5 2.97877 15.5 3.16834V11.4908C15.4999 12.314 15.2967 13.1243 14.9082 13.85C14.5198 14.5757 13.9582 15.1943 13.2733 15.6508L8 19.1667L2.72667 15.6508C2.04189 15.1944 1.48038 14.5759 1.09196 13.8504C0.70353 13.1248 0.500197 12.3146 0.5 11.4917V3.16834C0.500033 2.97877 0.564698 2.79488 0.683325 2.64701C0.801951 2.49915 0.967447 2.39615 1.1525 2.35501ZM2.16667 3.83668V11.4908C2.16668 12.0396 2.30215 12.5798 2.56105 13.0636C2.81996 13.5474 3.19429 13.9598 3.65083 14.2642L8 17.1642L12.3492 14.2642C12.8056 13.9599 13.1799 13.5476 13.4388 13.0639C13.6977 12.5803 13.8332 12.0403 13.8333 11.4917V3.83668L8 2.54168L2.16667 3.83668ZM7.16667 8.33334V5.83334H8.83333V8.33334H11.3333V10H8.83333V12.5H7.16667V10H4.66667V8.33334H7.16667Z" fill="currentColor" stroke="var(--main-bg-surface)" strokeWidth="0.4"></path>
  </svg>
);

const APIKeysIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-palette="ApiKeysIcon">
    <path d="M1.50008 0.5H16.5001C16.7211 0.5 16.9331 0.587797 17.0893 0.744078C17.2456 0.900358 17.3334 1.11232 17.3334 1.33333V14.6667C17.3334 14.8877 17.2456 15.0996 17.0893 15.2559C16.9331 15.4122 16.7211 15.5 16.5001 15.5H1.50008C1.27907 15.5 1.06711 15.4122 0.910826 15.2559C0.754545 15.0996 0.666748 14.8877 0.666748 14.6667V1.33333C0.666748 1.11232 0.754545 0.900358 0.910826 0.744078C1.06711 0.587797 1.27907 0.5 1.50008 0.5ZM2.33341 2.16667V13.8333H15.6667V2.16667H2.33341ZM9.00008 10.5H14.0001V12.1667H9.00008V10.5ZM6.22258 8L3.86508 5.64333L5.04425 4.46417L8.57925 8L5.04425 11.5358L3.86508 10.3567L6.22258 8Z" fill="currentColor" stroke="var(--main-bg-surface)" strokeWidth="0.4"></path>
  </svg>
);

const TrxnLogsIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" data-palette="LogsIcon">
    <path d="M14.8334 17.3333H3.16675C2.50371 17.3333 1.86782 17.0699 1.39898 16.6011C0.93014 16.1322 0.666748 15.4964 0.666748 14.8333V1.49999C0.666748 1.27898 0.754545 1.06701 0.910826 0.910734C1.06711 0.754454 1.27907 0.666656 1.50008 0.666656H13.1667C13.3878 0.666656 13.5997 0.754454 13.756 0.910734C13.9123 1.06701 14.0001 1.27898 14.0001 1.49999V11.5H17.3334V14.8333C17.3334 15.4964 17.07 16.1322 16.6012 16.6011C16.1323 17.0699 15.4965 17.3333 14.8334 17.3333ZM14.0001 13.1667V14.8333C14.0001 15.0543 14.0879 15.2663 14.2442 15.4226C14.4004 15.5789 14.6124 15.6667 14.8334 15.6667C15.0544 15.6667 15.2664 15.5789 15.4227 15.4226C15.579 15.2663 15.6667 15.0543 15.6667 14.8333V13.1667H14.0001ZM12.3334 15.6667V2.33332H2.33341V14.8333C2.33341 15.0543 2.42121 15.2663 2.57749 15.4226C2.73377 15.5789 2.94573 15.6667 3.16675 15.6667H12.3334ZM4.00008 4.83332H10.6667V6.49999H4.00008V4.83332ZM4.00008 8.16666H10.6667V9.83332H4.00008V8.16666ZM4.00008 11.5H8.16675V13.1667H4.00008V11.5Z" fill="currentColor" stroke="var(--main-bg-surface)" strokeWidth="0.4"></path>
  </svg>
);

// 🧩 Import your section Account
import Positions from "./Positions";
import SubAccounts from "./SubAccounts";
import PNLAnalytics from "./PNLAnalytics";
import BankDetails from "./BankDetails";
import AddFunds from "./AddFunds";
import Withdraw from "./Withdraw";
import TradingBot from "./TradingBot";
import Profile from "./Profile";
import Preferences from "./Preferences";
import Security from "./Security";
import APIKeys from "./APIKeys";
import TrxnLogs from "./TrxnLogs";

const menuItems = [
  { name: "Positions", icon: <PositionsIcon /> },
  { name: "Sub Accounts", icon: <SubAccountsIcon /> },
  { name: "PNL Analytics", icon: <PNLAnalyticsIcon /> },
  { name: "Bank Details", icon: <BankDetailsIcon /> },
  { name: "Add Funds", icon: <AddFundsIcon /> },
  { name: "Withdraw", icon: <WithdrawIcon /> },
  { name: "Trading Bot", icon: <TradingBotIcon /> },
  { name: "Profile", icon: <ProfileIcon /> },
  { name: "Preferences", icon: <PreferencesIcon /> },
  { name: "Security", icon: <SecurityIcon /> },
  { name: "API Keys", icon: <APIKeysIcon /> },
  { name: "Trxn. Logs", icon: <TrxnLogsIcon /> },
];

const DashboardLayout = ({ mode, defaultActiveSection = "Trading Bot" }) => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.state?.activeSection || defaultActiveSection);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (location.state?.activeSection) {
      setActiveItem(location.state.activeSection);
    }
  }, [location.state]);

  // 🧠 Dynamically load the selected component
  const renderContent = () => {
    // Common props for child components
    const commonProps = { mode };

    switch (activeItem) {
      case "Positions":
        return <Positions {...commonProps} />;
      case "Sub Accounts":
        return <SubAccounts {...commonProps} />;
      case "PNL Analytics":
        return <PNLAnalytics {...commonProps} />;
      case "Bank Details":
        return <BankDetails {...commonProps} />;
      case "Add Funds":
        return <AddFunds {...commonProps} />;
      case "Withdraw":
        return <Withdraw {...commonProps} />;
      case "Trading Bot":
        return <TradingBot {...commonProps} />;
      case "Profile":
        return <Profile {...commonProps} />;
      case "Preferences":
        return <Preferences {...commonProps} />;
      case "Security":
        return <Security {...commonProps} />;
      case "API Keys":
        return <APIKeys {...commonProps} />;
      case "Trxn. Logs":
        return <TrxnLogs {...commonProps} />;
      default:
        return <div className={mode === "dark" ? "text-gray-400" : "text-gray-600"}>Select a section to view details.</div>;
    }
  };

  return (
    <div className={`flex h-full relative overflow-hidden ${mode === "dark" ? "bg-[#0b0c0f] text-gray-200" : "bg-gray-50 text-gray-700"}`}>
      <style>
        {`
          .sidebar-container {
            width: ${isCollapsed ? '60px' : '220px'};
            transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            flex-shrink: 0;
            overflow: hidden;
          }
          .MuiListItem-root {
            display: flex;
            align-items: center;
            padding: 10px 12px;
            text-decoration: none;
            color: inherit;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            margin: 2px 0;
            white-space: nowrap;
          }
          .MuiListItem-button {
            cursor: pointer;
            border-radius: 6px;
          }
          .MuiListItem-button:hover {
            background-color: ${mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.04)"};
          }
          .Mui-selected {
            background-color: ${mode === "dark" ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 152, 0, 0.08)"} !important;
            border-left: 3px solid #ff9800;
            padding-left: 9px;
          }
          .Mui-selected:hover {
            background-color: ${mode === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(255, 152, 0, 0.12)"} !important;
          }
          .MuiListItemIcon-root {
            min-width: 36px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            color: ${mode === "dark" ? "#9CA3AF" : "#6B7280"};
            flex-shrink: 0;
            transition: color 0.3s ease;
          }
          .Mui-selected .MuiListItemIcon-root {
            color: #ff9800;
          }
          .MuiListItemText-root {
            flex: 1 1 auto;
            min-width: 0;
            margin: 0;
            margin-left: 8px;
            opacity: ${isCollapsed ? '0' : '1'};
            transform: ${isCollapsed ? 'translateX(-10px)' : 'translateX(0)'};
            transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            pointer-events: ${isCollapsed ? 'none' : 'auto'};
            overflow: hidden;
          }
          .MuiTypography-root {
            margin: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            color: ${mode === "dark" ? "#D1D5DB" : "#374151"};
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .Mui-selected .MuiTypography-root {
            font-weight: 500;
            color: ${mode === "dark" ? "#FFFFFF" : "#1F2937"};
          }
          .collapse-btn {
            position: absolute;
            right: -12px;
            top: 50%;
            width: 28px;
            height: 28px;
            border-radius: 50%;
            transform: translateY(-50%);
            background: ${mode === "dark" ? "#1F2937" : "#FFFFFF"};
            border: 2px solid ${mode === "dark" ? "#4B5563" : "#D1D5DB"};
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          }
          .collapse-btn:hover {
            background: ${mode === "dark" ? "#374151" : "#F9FAFB"};
            border-color: ${mode === "dark" ? "#6B7280" : "#9CA3AF"};
            transform: translateY(-50%) scale(1.15);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          }
          .collapse-btn svg {
            width: 14px;
            height: 14px;
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            transform: rotate(${isCollapsed ? '180deg' : '0deg'});
          }
          .sidebar-items-container {
            overflow-y: auto;
            overflow-x: hidden;
          }
          .sidebar-items-container::-webkit-scrollbar {
            width: 6px;
          }
          .sidebar-items-container::-webkit-scrollbar-track {
            background: transparent;
          }
          .sidebar-items-container::-webkit-scrollbar-thumb {
            background: ${mode === "dark" ? "#374151" : "#D1D5DB"};
            border-radius: 3px;
          }
          .sidebar-items-container::-webkit-scrollbar-thumb:hover {
            background: ${mode === "dark" ? "#4B5563" : "#9CA3AF"};
          }
        `}
      </style>
      {/* Sidebar */}
      <aside
        className={`sidebar-container border-r transition-all duration-300 flex flex-col relative ${
          mode === "dark" ? "bg-[#15161B] border-gray-700" : "bg-white border-gray-300"
        }`}
      >
        {/* Collapse/Expand Button */}
        <button
          className="collapse-btn"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            className={mode === "dark" ? "text-gray-300" : "text-gray-700"}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Sidebar Items */}
        <div className="flex-1 p-3 space-y-1 sidebar-items-container">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveItem(item.name);
              }}
              className={`MuiButtonBase-root MuiListItem-root MuiListItem-button ${
                activeItem === item.name ? "Mui-selected" : ""
              }`}
              title={isCollapsed ? item.name : ""}
            >
              <div className="MuiListItemIcon-root">
                {item.icon}
              </div>
              <div className="MuiListItemText-root">
                <span className="MuiTypography-root">
                  {item.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Dynamic Content */}
        <div className={`flex-1 overflow-auto ${mode === "dark" ? "bg-[#0b0c0f]" : "bg-gray-100"}`}>
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
