package playwright.sample;

import com.microsoft.playwright.Browser;
import com.microsoft.playwright.BrowserType;
import com.microsoft.playwright.Page;
import com.microsoft.playwright.Playwright;

import java.nio.file.Paths;

public class simplebrowser {

    public void launch() {
        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions().setHeadless(false).setSlowMo(50));

            Page page = browser.newPage();

            page.navigate("https://store.staging.mosaiq-dev.de/");
            page.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("example.png")).setFullPage(true));
        }
    }
}
