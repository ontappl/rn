package pl.netczuk.ontaprn;

import android.app.Application;
import android.content.Intent;

import com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.smixx.fabric.FabricPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
    private ReactNativePushNotificationPackage mReactNativePushNotificationPackage;

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        protected boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            mReactNativePushNotificationPackage = new ReactNativePushNotificationPackage();
            return Arrays.<ReactPackage>asList(
                    new RNDeviceInfo(),
                    new FabricPackage(),
                    new MainReactPackage(),
                    mReactNativePushNotificationPackage
            );
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    public void onNewIntent(Intent intent) {
        if (mReactNativePushNotificationPackage != null) {
            mReactNativePushNotificationPackage.newIntent(intent);
        }
    }
}
